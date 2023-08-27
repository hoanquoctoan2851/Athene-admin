<template>
  <a-table :loading="loading" :columns="columns" :data-source="dataTable" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'token'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'transaction'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'fromUser'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'toUser'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'amount'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'fee'">
        <span>
          {{ column.name }}
        </span></template
      >
      <template v-else-if="column.key === 'preBalance'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'postBalance'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'date'">
        <span>
          {{ column.name }}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'stt'">
        <span>{{ dataTable.indexOf(record) + 1 }}  </span>
      </template>
      <template v-else-if="column.key === 'token'">
        <span>
          <img :src="record.token.logo"/>
          <p>{{ record.token.label }}</p>
        </span>
      </template>
      <template v-else-if="column.key === 'transaction'">
        <span>
          <AppTags :type="record.transaction"></AppTags>
        </span>
      </template>
      <template v-else-if="column.key === 'fromUser'">
        <span>{{ record.fromUser }}</span>
      </template>
      <template v-else-if="column.key === 'toUser'">
        <span>{{ record.toUser }}</span>
      </template>
      <template v-else-if="column.key === 'status'">
        <AppTags :type="record.status"></AppTags>
      </template>
      <template v-else-if="column.key === 'amount'">
        <span>{{ record.amount.toLocaleString() }}</span>
      </template>
      <template v-else-if="column.key === 'fee'">
        <span>{{ record.fee }}</span>
      </template>
      <template v-else-if="column.key === 'preBalance'">
        <span>{{ record.preBalance }}</span>
      </template>
      <template v-else-if="column.key === 'date'">
        <span>{{ record.date }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import AppTags from '@/components/app/AppTags.vue'
import {formatDate, formatDecimalNumber} from "@/helper";
import {computed} from "vue";

export default {
  name: 'ComponentTableTransaction',
  components: {
    AppTags
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(prop) {
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'Token',
        dataIndex: 'token',
        key: 'token'
      },
      {
        name: 'Type transaction',
        dataIndex: 'transaction',
        key: 'transaction'
      },
      {
        name: 'From user',
        dataIndex: 'fromUser',
        key: 'fromUser'
      },
      {
        name: 'To user',
        dataIndex: 'toUser',
        key: 'toUser'
      },
      {
        name: 'Status',
        dataIndex: 'status',
        key: 'status'
      },
      {
        name: 'Amount',
        dataIndex: 'amount',
        key: 'amount'
      },
      {
        name: 'Fee',
        dataIndex: 'fee',
        key: 'fee'
      },
      {
        name: 'Pre-balance',
        dataIndex: 'preBalance',
        key: 'postBalance'
      },
      {
        name: 'Post-balance',
        dataIndex: 'postBalance',
        key: 'postBalance'
      },
      {
        name: 'Date',
        dataIndex: 'date',
        key: 'date'
      }
    ]

    const mapDataTransaction = (data) => {
      return data?.map((item) => {
        return {
          key: item.id,
          date: formatDate(item.createdAt),
          preBalance: formatDecimalNumber(item.preBalance, 4),
          postBalance: formatDecimalNumber(item.postBalance, 4),
          fee: formatDecimalNumber(item.fee, 4),
          amount: formatDecimalNumber(item.value),
          status: item.status,
          toUser: item.toId ? item.toId : '-',
          fromUser: item.fromId ? item.fromId : '-',
          transaction: item.type,
          token: {
            logo: '',
            label: item.tokenId ? item.tokenId === 1 ? 'ATH' : 'GEM' : '-'
          }
        }
      })
    }

    const dataTable = computed(() => {
      return mapDataTransaction(prop.data)
    })
    return {
      columns,
      dataTable
    }
  }
}
</script>
