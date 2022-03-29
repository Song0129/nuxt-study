import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'

import {
  DatePicker,
  Select,
  Pagination,
  Table,
  Button,
  Input,
  Menu,
  Icon,
  Layout,
  Tag,
  Divider,
} from 'ant-design-vue' //按需引入ant-design-vue

const components = {
  DatePicker,
  Select,
  Pagination,
  Table,
  Button,
  Input,
  Menu,
  Icon,
  Layout,
  Tag,
  Divider,
}

Object.keys(components).forEach((key) => Vue.use(components[key]))

// Vue.use(Antd)
