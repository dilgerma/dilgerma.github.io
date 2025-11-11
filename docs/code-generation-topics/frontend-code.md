---
layout: docs
title: Generating Frontend Code
---

# Generating Frontend Code

Generate React, Vue, or Angular components with TypeScript interfaces, state management integration, and API clients from your event models.

## Overview

Frontend code generation creates:

- **TypeScript interfaces** - Type-safe event and command definitions
- **API clients** - HTTP clients for command/query endpoints
- **React components** - Forms, lists, and detail views
- **State management** - Redux/Pinia/NgRx integration
- **Hooks/Composables** - Reusable logic
- **Validation schemas** - Form validation

## Supported Frontend Frameworks

### React Ecosystem

```yaml
language: typescript
framework: react
reactVersion: 18
stateManagement: redux-toolkit
apiClient: react-query
uiLibrary: material-ui
```

**Features:**
- TypeScript interfaces
- React components (functional + hooks)
- Redux Toolkit slices
- React Query hooks
- Form validation with Yup/Zod

### Vue.js Ecosystem

```yaml
language: typescript
framework: vue
vueVersion: 3
stateManagement: pinia
apiClient: axios
uiLibrary: vuetify
composition-api: true
```

**Features:**
- TypeScript interfaces
- Vue 3 composition API components
- Pinia stores
- Composables for API calls
- Form validation with VeeValidate

### Angular Ecosystem

```yaml
language: typescript
framework: angular
angularVersion: 17
stateManagement: ngrx
apiClient: httpclient
uiLibrary: angular-material
```

**Features:**
- TypeScript interfaces
- Angular components with standalone API
- NgRx stores and effects
- Services for API calls
- Reactive forms with validation

## Generating TypeScript Interfaces

Type-safe definitions from your event model.

### Model Input

```
Event: User Registered
Attributes:
- userId: uuid
- email: string
- firstName: string
- lastName: string
- registeredAt: timestamp

Command: Register User
Attributes:
- email: string
- password: string
- firstName: string
- lastName: string

View: User Profile
Attributes:
- userId: uuid
- email: string
- fullName: string
- memberSince: date
```

### Generated TypeScript

```typescript
// events.ts
export interface UserRegisteredEvent {
  eventId: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  registeredAt: Date;
}

// commands.ts
export interface RegisterUserCommand {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// views.ts
export interface UserProfile {
  userId: string;
  email: string;
  fullName: string;
  memberSince: Date;
}

// API request/response types
export interface RegisterUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterUserResponse {
  userId: string;
  message: string;
}
```

## Generating React Components

### Command Form Component

```typescript
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { TextField, Button, Box, Alert } from '@mui/material';
import { registerUser } from '../api/userApi';

const registerUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

type RegisterUserFormData = z.infer<typeof registerUserSchema>;

export const RegisterUserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserSchema),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log('User registered:', data.userId);
      // Navigate or show success message
    },
  });

  const onSubmit = (data: RegisterUserFormData) => {
    mutation.mutate(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      {mutation.isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Registration failed. Please try again.
        </Alert>
      )}

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
      />

      <TextField
        fullWidth
        label="First Name"
        margin="normal"
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        {...register('firstName')}
      />

      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        {...register('lastName')}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Registering...' : 'Register'}
      </Button>
    </Box>
  );
};
```

### View Component (User Profile)

```typescript
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
import { getUserProfile } from '../api/userApi';
import { UserProfile } from '../types/views';

interface UserProfileViewProps {
  userId: string;
}

export const UserProfileView: React.FC<UserProfileViewProps> = ({ userId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => getUserProfile(userId),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Failed to load user profile
      </Alert>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {data?.fullName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {data?.email}
        </Typography>
        <Typography variant="body2">
          Member since: {new Date(data?.memberSince).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};
```

## Generating Vue Components

### Command Form Component (Vue 3)

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/vue-query';
import { registerUser } from '../api/userApi';

const registerUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerUserSchema),
});

const [email] = defineField('email');
const [password] = defineField('password');
const [firstName] = defineField('firstName');
const [lastName] = defineField('lastName');

const mutation = useMutation({
  mutationFn: registerUser,
  onSuccess: (data) => {
    console.log('User registered:', data.userId);
    // Navigate or show success message
  },
});

const onSubmit = handleSubmit((values) => {
  mutation.mutate(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-alert v-if="mutation.isError.value" type="error" class="mb-4">
      Registration failed. Please try again.
    </v-alert>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      :error-messages="errors.email"
    />

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      :error-messages="errors.password"
    />

    <v-text-field
      v-model="firstName"
      label="First Name"
      :error-messages="errors.firstName"
    />

    <v-text-field
      v-model="lastName"
      label="Last Name"
      :error-messages="errors.lastName"
    />

    <v-btn
      type="submit"
      color="primary"
      block
      :loading="mutation.isPending.value"
    >
      Register
    </v-btn>
  </v-form>
</template>
```

### View Component (Vue 3)

```vue
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { getUserProfile } from '../api/userApi';

interface Props {
  userId: string;
}

const props = defineProps<Props>();

const { data, isLoading, error } = useQuery({
  queryKey: ['userProfile', props.userId],
  queryFn: () => getUserProfile(props.userId),
});
</script>

<template>
  <v-card>
    <v-card-text v-if="isLoading">
      <v-progress-circular indeterminate />
    </v-card-text>

    <v-alert v-else-if="error" type="error">
      Failed to load user profile
    </v-alert>

    <v-card-text v-else>
      <h2 class="text-h5">{{ data?.fullName }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ data?.email }}
      </p>
      <p class="text-body-2">
        Member since: {{ new Date(data?.memberSince).toLocaleDateString() }}
      </p>
    </v-card-text>
  </v-card>
</template>
```

## Generating API Clients

### React Query API Client

```typescript
import axios from 'axios';
import { RegisterUserCommand, RegisterUserResponse } from '../types';
import { UserProfile } from '../types/views';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Command: Register User
export const registerUser = async (
  command: RegisterUserCommand
): Promise<RegisterUserResponse> => {
  const response = await apiClient.post<RegisterUserResponse>(
    '/users/register',
    command
  );
  return response.data;
};

// Query: Get User Profile
export const getUserProfile = async (
  userId: string
): Promise<UserProfile> => {
  const response = await apiClient.get<UserProfile>(`/users/${userId}`);
  return response.data;
};

// Query: List Users
export const listUsers = async (): Promise<UserProfile[]> => {
  const response = await apiClient.get<UserProfile[]>('/users');
  return response.data;
};
```

## Generating State Management

### Redux Toolkit Slice

```typescript
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, getUserProfile } from '../api/userApi';
import { UserProfile, RegisterUserCommand } from '../types';

interface UserState {
  currentUser: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const registerUserAsync = createAsyncThunk(
  'user/register',
  async (command: RegisterUserCommand) => {
    const response = await registerUser(command);
    return response;
  }
);

export const fetchUserProfileAsync = createAsyncThunk(
  'user/fetchProfile',
  async (userId: string) => {
    const response = await getUserProfile(userId);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Registration failed';
      })
      // Fetch user profile
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserProfileAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch profile';
      });
  },
});

export const { clearError, logout } = userSlice.actions;
export default userSlice.reducer;
```

### Pinia Store (Vue)

```typescript
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { registerUser, getUserProfile } from '../api/userApi';
import type { UserProfile, RegisterUserCommand } from '../types';

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<UserProfile | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => currentUser.value !== null);

  async function register(command: RegisterUserCommand) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await registerUser(command);
      return response;
    } catch (e) {
      error.value = 'Registration failed';
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchProfile(userId: string) {
    isLoading.value = true;
    error.value = null;
    try {
      currentUser.value = await getUserProfile(userId);
    } catch (e) {
      error.value = 'Failed to fetch profile';
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  function logout() {
    currentUser.value = null;
  }

  function clearError() {
    error.value = null;
  }

  return {
    currentUser,
    isLoading,
    error,
    isAuthenticated,
    register,
    fetchProfile,
    logout,
    clearError,
  };
});
```

## Form Validation Schemas

### Zod Schema Generation

```typescript
import { z } from 'zod';

export const registerUserSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain uppercase, lowercase, and number'
    ),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name too long'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name too long'),
});

export type RegisterUserFormData = z.infer<typeof registerUserSchema>;
```

## Next Steps

- [Customize Templates](/docs/code-generation-topics/customizing-templates/) - Tailor generated components
- [Backend Code Generation](/docs/code-generation-topics/backend-code/) - Generate server-side code
- [Code Generation Hub](/docs/code-generation/) - Overview and getting started
