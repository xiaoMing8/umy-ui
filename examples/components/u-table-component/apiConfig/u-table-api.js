/**
 * Table Attributes（表格属性）
*/
export const columns = [
    {prop: 'parameter', label: '参数', width: 200},
    {prop: 'explain', label: '说明', minWidth: 300},
    {prop: 'type', label: '类型', width: 150},
    {prop: 'optionalValue', label: '可选值', width: 200},
    {prop: 'defaultValue', label: '默认值', width: 150}
]
// u-table属性的数据 // 33 + 16 = 49
export const data = [
    {
        parameter: 'data', type: 'array', optionalValue: '—', defaultValue: '—',
        explain: '表格数据 (如果表格数据row中存在disabled这个属性为true,那么当前行会被加上蒙层，不可点击。相当于屏蔽)',
    },
    {
        parameter: 'height',
        explain: '表格高度（不给高度，或者高度为0，那么就是自适应；不给height或者不给maxheight，虚拟滚动直接会关闭）。 如果你数据多而且高度为0或者为空，那么就会卡死，不支持百分比',
        type: 'string/number', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'max-height',
        explain: 'Table 的最大高度。不给height或者不给maxheight，虚拟滚动直接会关闭）, 合法的值为数字（不支持百分比)',
        type: 'string/number', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'border',
        explain: '是否显示纵向边框',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'size',
        explain: 'Table 的尺寸',
        type: 'String', optionalValue: 'medium / small / mini', defaultValue: '—',
    },
    {
        parameter: 'show-summary',
        explain: '是否需要合计',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'show-header',
        explain: '是否显示表头',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'current-row-key',
        explain: '当前行的 key，只写属性',
        type: 'String,Number', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'default-expand-all',
        explain: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'expand-row-keys',
        explain: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组',
        type: 'Array', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'highlight-current-row',
        explain: '是否要高亮当前行',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'stripe',
        explain: '是否为斑马纹',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'indent',
        explain: '展示树形数据时，树节点的缩进(这是传统树节点的缩进配置，不是大数据树哦！)',
        type: 'Number', optionalValue: '—', defaultValue: '16',
    },
    {
        parameter: 'lazy',
        explain: '是否懒加载子节点数据(这是传统树节点的配置，不是大数据树哦！)',
        type: 'Boolean', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'load',
        explain: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息(这是传统树节点的配置，不是大数据树哦！)',
        type: 'Function(row, treeNode, resolve)', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'fit',
        explain: '列的宽度是否自撑开',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'tree-props',
        explain: '渲染嵌套数据的配置选项, 开启row-key后可以配置（基本的树表格配置，如同element的树表格）',
        type: 'Object', optionalValue: '—', defaultValue: "{ hasChildren: 'hasChildren', children: 'children' }",
    },
    {
        parameter: 'select-on-indeterminate',
        explain: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
        type: 'Boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'sum-text',
        explain: '合计行第一列的文本',
        type: 'String', optionalValue: '—', defaultValue: '合计',
    },
  {
    parameter: 'row-key',
    explain: '行数据的 Key，用来优化 Table 的渲染；在使用树形表格时,（注意这个属性不是虚拟树表格，是一个普通的树）该属性是必填的',
    type: 'String', optionalValue: '—', defaultValue: '—',
  },
    {
      parameter: 'row-id',
      explain: '行数据的 id；在使用虚拟树表格时,该属性是必填的',
      type: 'String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'span-method',
        explain: '合并行或列的计算方法',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'tooltip-effect',
        explain: 'tooltip effect 属性',
        type: 'String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'summary-method',
        explain: '自定义的合计计算方法',
        type: 'Function({ columns, data }) 返回一个二维合计数组： [[]: // 这个是合计的数组]', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'row-class-name',
        explain: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className',
        type: 'Function({row, rowIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'row-style',
        explain: '行的 style 的回调方法',
        type: 'Function({row, rowIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'cell-class-name',
        explain: '行单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className',
        type: 'Function({row, column, rowIndex, columnIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'cell-style',
        explain: '行单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style',
        type: 'Function({row, column, rowIndex, columnIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-row-class-name',
        explain: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className',
        type: 'Function({row, rowIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-row-style',
        explain: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
        type: 'Function({row, rowIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-cell-class-name',
        explain: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className',
        type: 'Function({row, column, rowIndex, columnIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-cell-style',
        explain: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style',
        type: 'Function({row, column, rowIndex, columnIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'default-sort',
        explain: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
        type: 'Object', optionalValue: 'order: ascending, descending', defaultValue: '如果只指定了prop, 没有指定order, 则默认顺序是ascending',
    },
    {
        parameter: 'empty-text',
        explain: '空数据时显示的文本内容,也可以通过 slot="empty" 设置',
        type: 'String', optionalValue: '—', defaultValue: '暂无数据',
    },

    // u-table融入
    {
        parameter: 'inverse-current-row',
        explain: '是否需要反选高亮当前行（当点击行默认为选中，必须点击其他行才能取消选中，这是ele的原则。那么是否需要点击行选中，再次点击当前选中行就取消呢，请设置这个属性吧）',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'tooltip-placement',
        explain: 'Tooltip 的出现位置',
        type: 'String', optionalValue: 'element的Tooltip组件的placement属性', defaultValue: 'top',
    },
    {
        parameter: 'big-data-checkbox',
        explain: '大量数据时候，表格存在selection选择列表时，是否开启解决全选卡顿（缓慢）问题',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'total-option',
        explain: '这个是为了快捷合计不需要自己写合计方法。（需要开启showSummary：true），注意：当写了自定义合计方法（summary-method），此属性不在生效',
        type: 'Array', optionalValue: "数据格式：[{ label: '金额', unit: '元' }]， 对象描述： {label: // 需要合计的表头名（与要合计的表头名一致）, unit: // 合计出来的单位名(可以为空)}", defaultValue: '—',
    },
    {
        parameter: 'header-drag-style',
        explain: '是否修改表格的头部拖动样式',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'record-table-select',
        explain: '是否记录表格的选项id(必须保证行ID存在，且唯一) 默认为false （用于我表格每页选中项进行保存，切换分页，不会导致之前页勾选的选项消失）注意：只有每页不超过1000条数据，才有效。',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'use-virtual',
        explain: '是否开启虚拟滚动 (解决大数据渲染卡顿问题)',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'row-height',
        explain: 'use-virtual未开启的情况可以不需要，行高(必须要设置行高，如css给td给了80高度，那么你就给row-height给80，不要乱给高度，以td tr高度为准，否则会导致表格计算不正确)',
        type: 'Number', optionalValue: '—', defaultValue: '60',
    },
    {
        parameter: 'tree-config',
        explain: 'u-table大数据树形表格配置项，必去开启row-id 且 开启use-virtual 才有效的配置',
        type: 'Object', optionalValue: '—', defaultValue: "{ children: 'children', .... }",
        children: [
            {
                parameter: 'children', explain: '树子节点的属性',
                type: 'String', optionalValue: '—', defaultValue: "children",
            },
            {
                parameter: 'indent', explain: '树节点的缩进',
                type: 'Number', optionalValue: '—', defaultValue: "20",
            },
            {
                parameter: 'iconOpen', explain: '自定义展开后显示的图标,暂无(没时间做)',
                type: 'String', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'iconClose', explain: '自定义收起后显示的图标,暂无(没时间做)',
                type: 'String', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'expandAll', explain: '默认展开所有子孙树节点（只会在初始化时被触发一次）',
                type: 'Boolean', optionalValue: '—', defaultValue: "false",
            },
            {
                parameter: 'trigger', explain: '触发方式  default（点击按钮触发）, cell（点击单元格触发）, row（点击行触发）',
                type: 'String', optionalValue: '—', defaultValue: "default",
            },
            {
                parameter: 'expandRowKeys', explain: '默认展开指定树节点（只会在初始化时被触发一次，需要有 row-key属性值的字段）',
                type: "Array", optionalValue: '—', defaultValue: "—",
            },
            {
              parameter: 'hasChildren', explain: '标识是否存在子节点，从而控制是否允许被点击',
              type: "string", optionalValue: '—', defaultValue: "hasChildren",
            },
            {
              parameter: 'lazy', explain: '是否使用懒加载（启用后只有指定 hasChild 的节点才允许被点击）',
              type: "Boolean", optionalValue: '—', defaultValue: "false",
            },
            {
              parameter: 'load', explain: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数返回子节点',
              type: "Function", optionalValue: '—', defaultValue: "Function(row, resolve)",
            }
        ]
    },
    {
        parameter: 'excess-rows',
        explain: '可视区域上方和下方额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能',
        type: 'Number', optionalValue: '—', defaultValue: '3',
    },
    {
        parameter: 'show-header-overflow',
        explain: '设置表头所有内容过长时显示为省略号',
        type: 'boolean/string', optionalValue: 'ellipsis（只显示省略号, 默认）,title（并且显示为原生 title）', defaultValue: '—',
    },
    {
        parameter: 'show-body-overflow',
        explain: '设置表体（行）所有内容过长时显示为省略号',
        type: 'boolean/string', optionalValue: 'ellipsis（只显示省略号, 默认）,title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）', defaultValue: '—',
    },
    {
        parameter: 'fixed-columns-roll',
        explain: '表格有固定列,同时表格有横向滚动条，有时候会导致固定列部分的横向滚动条不可拖动，是否需要解决此问题',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'select-tr-class',
        explain: '如果当前行被选中了 列type存在类型为selection，就给当前行给个类样式,  示例: 比如你给这个属性给个selectTr（样式名）字符串',
        type: 'String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'data-changes-scroll-top',
        explain: '数据变化滚动条是否滚动到顶部',
        type: 'Boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'beautify-table',
        explain: '美化表格，修改了样式',
        type: 'Boolean', optionalValue: '—', defaultValue: 'false',
    },
]
/**
 * Table Events（表格事件）
 */
export const columnsEvents = [
    {prop: 'eventName', label: '事件名', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'parameter', label: '参数', width: 250}
]
export const eventsData = [
    {
        eventName: 'table-select-change',
        explain: '整个表格Checkbox选中的row的id数组, 必须保证row存在id且唯一，没有ID可以自己造, 该事件触发方式 需要设置表格属性  record-table-select：true',
        parameter: 'tableSelectData,为选中row id集合'
    },
    {
        eventName: 'select-all',
        explain: '当用户手动勾选全选 Checkbox 时触发的事件',
        parameter: 'selection'
    },
    {
        eventName: 'select',
        explain: '当用户手动勾选数据行的 Checkbox 时触发的事件',
        parameter: 'selection, row'
    },
    {
        eventName: 'selection-change',
        explain: '当选择项发生变化时会触发该事件',
        parameter: 'selection'
    },
    {
        eventName: 'row-dblclick',
        explain: '当某一行被双击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'cell-mouse-enter',
        explain: '当单元格 hover 进入时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-mouse-leave',
        explain: '当单元格 hover 退出时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-click',
        explain: '当某个单元格被点击时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-dblclick',
        explain: '当某个单元格被双击击时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'row-contextmenu',
        explain: '当某一行被鼠标右键点击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'header-click',
        explain: '当某一列的表头被点击时会触发该事件',
        parameter: 'column, event'
    },
    {
        eventName: 'header-contextmenu',
        explain: '当某一列的表头被鼠标右键点击时触发该事件',
        parameter: 'column, event'
    },
    {
        eventName: 'current-change',
        explain: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
        parameter: 'currentRow, oldCurrentRow'
    },
    {
        eventName: 'expand-change',
        explain: '当用户对某一行展开或者关闭的时候会触发该事件,  注意：你不开启use-virtual才有效，开启了就不生效。文档开头用前须知部分有介绍，开启不支持展开行',
        parameter: 'row, expandedRows'
    },
    {
        eventName: 'toggle-tree-expand',
        explain: '用于u-table虚拟表格树, 当虚拟树节点展开或收起时会触发该事件',
        parameter: 'row, treeExpanded, event'
    },
    {
        eventName: 'row-click',
        explain: '当某一行被点击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'header-dragend',
        explain: '当拖动表头改变了列的宽度的时候会触发该事件',
        parameter: 'newWidth, oldWidth, column, event'
    },
    {
        eventName: 'table-body-scroll',
        explain: '当表体滚动时触发，无论横向还是竖向',
        parameter: '{scrollTop， scrollLeft, table, judgeFlse: 这个参数返回一个boolean值，为true则代表表格滚动到了底部了，false没有滚动到底部，必须开起大数据渲染模式才能有值哦}, event'
    },
    {
        eventName: 'sort-change',
        explain: '当表格的排序条件发生变化的时候会触发该事件',
        parameter: '{ column, prop, order }'
    },
    {
        eventName: 'filter-change',
        explain: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
        parameter: 'filters'
    },
]
/**
 * Table Methods（表格方法）
 */
export const columnsMethods = [
    {prop: 'methodsName', label: '方法名', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'parameter', label: '参数', width: 250},
    {prop: 'careful', label: '注意点', minWidth: 200},
]
export const methodsData = [
    {
        methodsName: 'toggleAllSelection',
        explain: '用于多选表格，切换所有行的选中状态',
        parameter: '—'
    },
    {
        methodsName: 'clearSelection',
        explain: '用于表格多选，清空用户的选择',
        parameter: '—'
    },
    {
        methodsName: 'toggleRowSelection',
        careful: '注意：开启row-id且开启use-virtual且存在复选框，代表是个大数据树型表格带上复选框，如果你在按照你的原始数据（原始数据的意思就是你赋值给我表格的数据）' +
            '，中的row传递给我去勾选可能勾选不上。此时你可能需要虚拟树处理后的数据中的row去勾选。那么你需要用到这个方法getUTreeData，具体请看这个方法getUTreeData',
        explain: '用于表格多选，切换某一行的选中状态。obj如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        parameter: 'rows 格式: [{  row: row, selected: true || false }]'
    },
    {
        methodsName: 'toggleRowExpansion',
        explain: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
        parameter: 'row, expanded'
    },
    {
        methodsName: 'setCurrentRow',
        explain: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
        parameter: 'row'
    },
    {
        methodsName: 'pagingScrollTopLeft',
        explain: '让表格滚动条回到顶部和左侧。',
        parameter: 'top,left -> 距离顶部, 左侧距离。 不传值默认为0'
    },
    {
        methodsName: 'doLayout',
        explain: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法。',
        parameter: '—'
    },
    {
        methodsName: 'clearSort',
        explain: '用于清空排序条件，数据会恢复成未排序的状态',
        parameter: '—'
    },
    {
        methodsName: 'clearFilter',
        explain: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
        parameter: 'columnKey'
    },
    {
        methodsName: 'sort',
        explain: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。',
        parameter: 'prop: string, order: string'
    },
    {
        methodsName: 'reloadData',
        explain: '绑定表格数据方法，写了这个最好不要使用属性data方式绑定表格数据，二选其一',
        parameter: 'data表格数据  实例： this.$refs.plTable.reloadData(我就是表格数据啦)'
    },
    {
        methodsName: 'scrollBottom',
        explain: '表格滚动到底部',
        parameter: '—'
    },
    {
        methodsName: 'tableExample',
        explain: '表格实例方式，调用就会返回table实例',
        parameter: '—'
    },
    {
        methodsName: 'getTableColumn',
        explain: '获取表格的列',
        parameter: '—'
    },
    {
        methodsName: 'getUTreeData',
        explain: '返回虚拟树的table数据,它常用于虚拟树复选框的勾选,不是虚拟树且没有复选框用不到',
        parameter: '—'
    },
    {
        methodsName: 'isTreeExpandByRow',
        explain: '用于u-table虚拟表格树，判断行是否为树形节点展开状态 返回 Boolean',
        parameter: 'Row'
    },
    {
        methodsName: 'setAllTreeExpansion',
        explain: '用于u-table虚拟表格树，设置所有树节点的展开与否',
        parameter: '—'
    },
    {
        methodsName: 'clearTreeExpand',
        explain: '用于u-table虚拟表格树，手动清空树形节点的展开状态，数据会恢复成未展开的状态',
        parameter: '—'
    },
    {
        methodsName: 'getTreeExpandRecords',
        explain: '用于u-table虚拟表格树，获取已展开的节点（注意，即使父节点被收起，只要该节点还处于展开状态都能获取到）',
        parameter: 'Array'
    },
    {
        methodsName: 'setTreeExpansion',
        explain: '用于u-table虚拟表格树，设置展开树形节点，二个参数设置这一行展开与否',
        parameter: 'row: row, checked: boolean'
    },
    {
        methodsName: 'toggleTreeExpansion',
        explain: '用于u-table虚拟表格树，切换展开树形节点的状态',
        parameter: 'row'
    },
]
