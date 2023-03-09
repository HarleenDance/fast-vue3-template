<!--
 * @Descripttion: 
 * @version: 18.1.2
 * @Author: Harleens
 * @Date: 2023-03-04 13:41:47
 * @LastEditors: Harleens
 * @LastEditTime: 2023-03-08 21:31:23
-->
<script setup lang="ts">
  import { useStatisDeviceByUserObject } from '/@/hooks/useStatisDeviceByUserObject';

  import { reactive, ref } from 'vue';
  import Header from '/@/components/Header/index.vue';
  // 引入hooks组件
  import { useSet } from 'v3hooks';

  //开发测试方式
  import FormDesigner from '/@/components/formdesigner/FormDesigner.vue';

  // //发布测试方式
  // import { FormDesigner } from '../dist/build.es.js';
  // import "../dist/style.css";

  let data = ref({});

  data.value = {
    controls: [
      {
        type: 'textarea',
        name: '多行文本',
        key: 'xNkeci7zl',
        id: 'textarea_xNkeci7zl',
        lock: false,
        dataType: 'string',
        props: {
          width: 12,
          showLabel: true,
          label: '多行文本',
          defaultValue: '',
          placeholder: '',
          required: false,
          requiredMessage: '必填字段',
          pattern: '',
          patternMessage: '格式不正确',
          disabled: false,
          readonly: false,
          showWordLimit: false,
          maxlength: 50,
          rows: 3,
          autosize: false,
          customClass: '',
        },
        rules: [
          {
            message: '必填字段',
            required: false,
          },
          {
            message: '格式不正确',
          },
        ],
      },
    ],
    props: {
      labelPosition: 'right',
      labelWidth: 100,
      size: 'default',
      customClass: '',
      cols: 12,
    },
  };

  function showData() {
    console.log(data);
  }
  let uploadOptions = {
    action: 'http://localhost:8888/api/Common/UploadFile',
    getHeaders: function () {
      return { token: '123' };
    },
    getFileHook: (res) => {
      if (res.success) {
        return {
          name: res.result.url.substr(res.result.url.lastIndexOf('/') + 1),
          url: res.result.url,
        };
      } else {
        return res.msg;
      }
    },
  };

  let controlGroups = [
    {
      name: '基础组件',
      controls: [
        'input',
        'textarea',
        'inputnumber',
        'select',
        'radio',
        'checkbox',
        'rate',
        'color',
        'date',
        'time',
        'switch',
        'slider',
        'text',
        'html',
        'link',
        'divider',
      ],
    },
    {
      name: '高级组件',
      controls: ['upload', 'uploadImage', 'region', 'cascader', 'editor', 'table', 'tab'],
    },
  ];
</script>

<template>
  <Header />
  <div class="h-full">
    <FormDesigner :controlGroups="controlGroups" :uploadOptions="uploadOptions" :formData="data"></FormDesigner>
  </div>
</template>
<style lang="less"></style>
