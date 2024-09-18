<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { Textarea } from "src/components/ui/textarea";
import * as z from "zod";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "src/components/ui/form";

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string(),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log(values)
});
</script>

<template>
  <form @submit="onSubmit" v-on:submit.prevent>
    <div class="grid grid-cols-2 gap-2">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Your name</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Gian Gonzaga"
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription>Enter your full name</FormDescription>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Your Email</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="gian@example.com"
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription>Enter your email</FormDescription>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="message">
        <FormItem class="col-span-2">
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea
              type="message"
              placeholder="Enter your message here"
              v-bind="componentField"
              rows="10"
            />
          </FormControl>
        </FormItem>
      </FormField>
    </div>
    <Button type="submit" class="mt-4"> Submit </Button>
  </form>
</template>
