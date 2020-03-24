<template>
  <div>
    <template>
      <!-- 
        columns	: 表格列的配置描述
        bordered: 是否展示外边框和列边框  boolean
        loading: 页面是否加载中	 boolean
        indentSize: 展示树形数据时，每层缩进的宽度，以 px 为单位  number
      -->
      <a-table
        :columns="columns"
        :loading="loading"
        bordered
        :dataSource="datas"
        :indentSize="10"
        :rowSelection="{onChange:onChange,onSelect:onSelect,onSelectAll:onSelectAll}"
      >
        <span slot="action" slot-scope="text, record">
          <a @click="getThirdPublishChannelOne(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      columns: [
        {
          title: "一家之主名字，展开后的是成员名字",
          dataIndex: "name",
          key: "name",
          width: "20%"
        },
        {
          title: "其他资料",
          children: [
            {
              title: "年龄",
              dataIndex: "age",
              key: "age"
              // sorter: (a, b) => a.age - b.age // 添加此属性可以对年龄进行排序
            },
            {
              title: "出生地址",
              children: [
                {
                  title: "街道",
                  dataIndex: "street",
                  key: "street"
                },
                {
                  title: "社区",
                  children: [
                    {
                      title: "单元",
                      dataIndex: "building",
                      key: "building"
                    },
                    {
                      title: "楼层",
                      dataIndex: "number",
                      key: "number"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "目前地址",
          dataIndex: "companyAddress",
          key: "companyAddress"
        },
        {
          title: "操作",
          dataIndex: "action",
          align: "center",
          scopedSlots: { customRender: "action" }
        }
      ],
      datas: []
    };
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.datas.push({
        key: i,
        name: "李三" + i + "号",
        age: i + 25,
        street: "北京老胡同",
        building: "C",
        number: 2035,
        companyAddress: "四海集团街道",
        companyName: "乾清宫",
        gender: "男",
        children: [
          {
            key: i + 100,
            name: "李三" + i + "号的儿子" + i,
            age: i + 1,
            street: "北京老胡同" + i + "街道",
            building: "C",
            number: i * 2,
            companyAddress: "娃哈哈乳业",
            companyName: "御膳房餐厅",
            gender: "女"
          }
        ]
      });
    }
  },
  methods: {
    getThirdPublishChannelOne(e){},
    handleDelete(e){},
  // 选择的数据改变时触发
    onChange(selectedRowKeys, selectedRows) {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    // 点击每一条数据前面的选择框时触发
    onSelect(record, selected, selectedRows) {
      console.log(
        "record, selected, selectedRows",
        record,
        selected,
        selectedRows
      );
    },
     // 点击表头前面的选择框时触发
    onSelectAll(selected, selectedRows, changeRows) {
      console.log(
        "selected, selectedRows, changeRows",
        selected,
        selectedRows,
        changeRows
      );
    }
  }
};
</script>
<style lang='scss' scoped>

</style>