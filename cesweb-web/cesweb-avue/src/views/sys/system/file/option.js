export const tableOption = {
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  addBtn: true,
  viewBtn: false,
  editBtn: false,
  saveBtn: false,
  menuAlign: 'center',
  indexLabel: '序号',
  searchMenuSpan: 3,
  column: [{
    label: '编号',
    prop: 'id',
    hide: true,
    addDisplay: false
  }, {
    hide: true,
    label: '附件上传',
    prop: 'imgUrl',
    type: 'upload',
    span: 24,
    drag: true,
    propsHttp: {
      res: 'data',
      home: '/api',
      name: 'fileName'
    },
    tip: '上传同步至文件服务器',
    multiple: true,
    action: "/system/sysfile/upload",
    listType: "picture"
  }, {
    label: '空间',
    prop: 'bucketName',
    overHidden: true,
    addDisplay: false
  }, {
    label: '文件名',
    prop: 'fileName',
    overHidden: true,
    search: true,
    addDisplay: false
  }, {
    label: '原文件名',
    prop: 'original',
    overHidden: true,
    addDisplay: false
  }, {
    label: '文件类型',
    prop: 'type',
    addDisplay: false
  }, {
    label: '文件大小',
    prop: 'fileSize',
    addDisplay: false
  }, {
    label: '上传人',
    prop: 'createUser',
    addDisplay: false
  }, {
    width: 180,
    label: '创建时间',
    prop: 'createTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    editDisabled: true,
    addDisplay: false,
    span: 24
  }]
}