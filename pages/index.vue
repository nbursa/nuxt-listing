<template>
  <div class="page">
    <h1>Scholarship Winners</h1>

    <WinnerTable :winners="winners" :loading="loading" />

    <Paginator
      :rows="rows"
      :totalRecords="totalPages * rows"
      :first="(page - 1) * rows"
      :pageLinkSize="isMobile ? 3 : 7"
      :disabled="loading"
      @page="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { parseJsonApi } from "@/utils/parseJsonApi";
import WinnerTable from "@/components/WinnerTable.vue";
import type { Winner } from "@/types/winner";

const rows = 10;
const route = useRoute();
const router = useRouter();

const page = ref(Number(route.query.page || 1));
const winners = ref<Winner[]>([]);
const totalPages = ref(1);
const loading = ref(false);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
});

watch(
  () => route.query.page,
  async (val) => {
    page.value = Number(val || 1);
    await loadPage();
  },
  { immediate: true }
);

async function loadPage() {
  loading.value = true;
  try {
    const res = await $fetch(`/api/winners?page=${page.value}`);
    winners.value = parseJsonApi(res.data);
    totalPages.value = res.meta.pagination.total_pages;
  } catch (err) {
    winners.value = [];
    totalPages.value = 1;
  } finally {
    loading.value = false;
  }
}

function onPageChange(e: { page: number }) {
  const next = e.page + 1;
  if (next !== page.value) {
    router.replace({ query: { page: next } });
  }
}
</script>
