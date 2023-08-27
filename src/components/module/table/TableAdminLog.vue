<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'role'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'event'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'description'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'time'">
        <span>
          {{ column.name }}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'stt'">
        <span>{{ data.indexOf(record) + 1 }} </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span>
          {{ record.email }}
        </span>
      </template>
      <template v-else-if="column.key === 'role'">
        <span>
          <AppTags :type="record.role"></AppTags>
        </span>
      </template>
      <template v-else-if="column.key === 'event'">
        <span>{{ record.event }}</span>
      </template>
      <template v-else-if="column.key === 'tableName'">
        <span>{{ record.tableName }}</span>
      </template>
      <template v-else-if="column.key === 'description'">
        <span>{{ record.description }}</span>
      </template>
      <template v-else-if="column.key === 'time'">
        <span>{{ record.time }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import AppTags from '@/components/app/AppTags.vue'
import { formatDate } from '@/helper'
export default {
  name: 'ComponentTableAdminLog',
  components: {
    AppTags
  },
  setup() {
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        name: 'Role',
        dataIndex: 'role',
        key: 'role'
      },
      {
        name: 'Event',
        dataIndex: 'event',
        key: 'event'
      },
      {
        name: 'Table name',
        dataIndex: 'tableName',
        key: 'tableName'
      },
      {
        name: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        name: 'Time',
        dataIndex: 'time',
        key: 'time'
      }
    ]
    const data = [
      {
        key: '1',
        email: 'Example@gmail.com',
        role: 'supper_admin',
        event: 'Update Link Download App',
        tableName: 'system_config - id: 4',
        description: 'description',
        time: formatDate(1234212312532)
      },
      {
        key: '2',
        email: 'Example@gmail.com',
        role: 'admin_view',
        event: 'Update Link Download App',
        tableName: 'system_config - id: 4',
        description: 'description',
        time: formatDate(1234212312532)
      },
      {
        key: '3',
        email: 'Example@gmail.com',
        role: 'admin',
        event: 'Update Link Download App',
        tableName: 'system_config - id: 4',
        description: 'description',
        time: formatDate(1234212312532)
      }
    ]
    return {
      columns,
      data
    }
  }
}
</script>
