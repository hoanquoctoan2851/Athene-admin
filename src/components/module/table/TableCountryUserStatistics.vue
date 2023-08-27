<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'address'">
        <span>
          {{ $t(`${column.name}`) }}
        </span>
      </template>
      <template v-else-if="column.key === 'new_register'">
        <span>
          {{ $t(`${column.name}`) }}
        </span>
      </template>
      <template v-else-if="column.key === 'total_user'">
        <span>
          {{ $t(`${column.name}`) }}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'stt'">
        <span>{{ data.indexOf(record) + 1 }} </span>
      </template>
      <template v-else-if="column.key === 'address'">
        <div class="flex flex-row items-center gap-4">
          <span v-if="record.address?.code.toLowerCase()" :class="`fi fi-${record.address?.code.toLowerCase()}`"></span>
          <span>
          {{ record.address?.Name }}
        </span>
        </div>
      </template>
      <template v-else-if="column.key === 'new_register'">
        <span>
          {{record.new_register}}
        </span>
      </template>
      <template v-else-if="column.key === 'total_user'">
        <span>{{ record.total_user }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import { formatDecimalNumber } from '@/helper'
import {countryCodeList} from "@/helper/const";
export default {
  name: 'ComponentTableUserCountry',
  setup() {
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'common.address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        name: 'page.user.chart_title',
        dataIndex: 'new_register',
        key: 'new_register'
      },
      {
        name: 'page.user.total_user',
        dataIndex: 'total_user',
        key: 'total_user'
      },
    ]
    const data = [
      {
        key: '1',
        address: countryCodeList.find((item) => item.code === 'VN' ),
        new_register: formatDecimalNumber(1000, 0,0),
        total_user: formatDecimalNumber(1000, 0,0) ,
      },
      {
        key: '2',
        address: countryCodeList.find((item) => item.code === 'GR' ),
        new_register: formatDecimalNumber(1000, 0,0),
        total_user: formatDecimalNumber(1000, 0,0) ,
      },
      {
        key: '3',
        address: countryCodeList.find((item) => item.code === 'RU' ),
        new_register: formatDecimalNumber(1000, 0,0),
        total_user: formatDecimalNumber(1000, 0,0) ,
      },
    ]
    return {
      columns,
      data
    }
  }
}
</script>
