<template>
  <div class="table">
    <DataTable :value="winners" dataKey="id">
      <template #empty>
        <div v-if="loading">
          <ProgressSpinner class="spinner" />
        </div>
        <div v-else>No data available.</div>
      </template>

      <Column header="Photo">
        <template #body="{ data }">
          <img
            :src="data.photo"
            alt="Photo"
            width="50"
            height="50"
            style="border-radius: 50%"
          />
        </template>
      </Column>

      <Column field="name" header="Name" />

      <Column field="scholarship" header="Scholarship" />

      <Column field="amount" header="Amount Won">
        <template #body="{ data }">${{ data.amount }}</template>
      </Column>

      <Column field="awardedAt" header="Date">
        <template #body="{ data }">
          {{ formatDate(data.awardedAt) }}
        </template>
      </Column>

      <Column header="Video">
        <template #body="{ data }">
          <a
            v-if="data.video"
            :href="data.video"
            target="_blank"
            rel="noopener noreferrer"
            width="160"
            height="90"
            frameborder="0"
            allowfullscreen
            class="video"
            ><i class="pi pi-play"></i
          ></a>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import type { Winner } from "@/types/winner";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));

defineProps<{
  winners: Winner[];
  loading: boolean;
}>();
</script>
