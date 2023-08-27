<template>
  <a-popconfirm
      :ok-text="okText"
      :cancel-text="cancelText"
      @confirm="confirm"
      @cancel="cancel"
  >
    <template #icon>
    </template>
    <template #title>
      <span>{{title}}</span>
    </template>
    <slot></slot>
  </a-popconfirm>
</template>
<script>
export default {
  name: 'ComponentPopConfirm',
  props: {
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: 'Yes'
    },
    cancelText: {
      type: String,
      default: 'No'
    }
  },
  emits: ['confirm'],
  setup(_, {emit}) {
    const confirm = () => {
      emit('confirm')
    };

    const cancel = () => {
    };
    return {
      confirm,
      cancel
    }
  }
}
</script>