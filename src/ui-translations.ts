// The website has a qe.settings.language that converts a few words from Chinese to English.
// However, this is not accessible from the global scope at this time, and passing a queryParam nor changing the local settings.json work either
import { atlasTalentTranslations } from "./atlas-talents"
import { Lang, Translations } from "./translations.types"

const patchNotes: Translations = {
    "更新日志": {
        en: "Changelog"
    },
    "更新内容": {
        en: "Update"
    },
    "画雪支持成本记录": {
        en: "Added cost item tracking for Snowpaper"
    },
    "小窗和极简模式调整": {
        en: "Mini Window and Minimal Mode Adjustments"
    },
    "由于日志原因，棱镜无法区分稀有度，改为默认更新紫色价格": {
        en: "Due to log limitations, Prism rarity cannot be distinguished, defaulting to purple price updates"
    },
    "调整界面布局，优化数据重置逻辑": {
        en: "Adjusted UI layout and optimized data reset logic"
    },
    "修复桌宠禁用仍显示成本推送的问题": {
        en: "Fixed issue where notification pet would still show cost alerts when disabled"
    },
    "优化设置界面内容项": {
        en: "Optimized settings UI content items"
    },
    "优化历史记录模块": {
        en: "Optimized history module"
    },
    "小窗桌宠新增成本余量提醒": {
        en: "Mini window notification pet added cost balance reminder"
    },
    "新增桌宠形象以及支持自定义": {
        en: "Added notification pet images and support for customization"
    }
}

const characterClassTranslations: Translations = {
    "时空1": {
        en: "Y1"
    },
    "时空2": {
        en: "Y2"
    },
    "时空3": {
        en: "Y3"
    },
    "召唤1": {
        en: "M1"
    },
    "召唤2": {
        en: "M2"
    },
    "罗莎1": {
        en: "Ro1"
    },
    "罗莎2": {
        en: "Ro2"
    },
    "魔灵1": {
        en: "I1"
    },
    "魔灵2": {
        en: "I2"
    },
    "魔灵3": {
        en: "I3"
    },
    "狂1": {
        en: "Re1"
    },
    "狂2": {
        en: "Re2"
    },
    "枪1": {
        en: "C1"
    },
    "枪2": {
        en: "C2"
    },
    "枪3": {
        en: "C3"
    },
    "猫1": {
        en: "E1"
    },
    "猫2": {
        en: "E2"
    },
    "猫3": {
        en: "E3"
    },
    "宾1": {
        en: "B1"
    },
    "宾2": {
        en: "B2"
    },
    "冰1": {
        en: "G1"
    },
    "冰2": {
        en: "G2"
    },
    "冰3": {
        en: "G3"
    },
    "月1": {
        en: "S1"
    },
    "月2": {
        en: "S2"
    },
    "月3": {
        en: "S3"
    }
}

const notificationPetTranslations: Translations = {
    "你的": {
        en: "Your"
    },
    "只剩": {
        en: "Only "
    },
    "个啦，请及时补充哦~": {
        en: " left, please replenish!"
    }
}

const seasonTranslations: Translations = {
    "永久": {
        en: "Standard"
    },
    "S11独狼": {
        en: "S11 SSFSC"
    },
    "S11专家": {
        en: "S11 HC"
    },
    "S11赛季": {
        en: "S11 SC"
    }
}

// Brute force | TODO:  replace this with regex
const tempBruteForceTranslations: Translations = {
    "等1种": {
        en: "+1"
    },
    "等2种": {
        en: "+2"
    },
    "等3种": {
        en: "+3"
    },
    "等4种": {
        en: "+4"
    },
    "等5种": {
        en: "+5"
    },
    "等6种": {
        en: "+6"
    },
    "等7种": {
        en: "+7"
    },
    "等8种": {
        en: "+8"
    },
    "等9种": {
        en: "+9"
    },
    "等1个": {
        en: "+1"
    },
    "等2个": {
        en: "+2"
    },
    "等3个": {
        en: "+3"
    },
    "等4个": {
        en: "+4"
    },
    "等5个": {
        en: "+5"
    },
    "等6个": {
        en: "+6"
    },
    "等7个": {
        en: "+7"
    },
    "等8个": {
        en: "+8"
    },
    "等9个": {
        en: "+9"
    },
}
const uiTranslations: Translations = {
    "记录状态异常！！！请在游戏设置界面开启日志，点击返回登录，选择角色重新进入游戏！！": {
      en: "Error! Please \"Enable Log\" in \"Settings -> Other\" then sort your backpack, or reselect your character!!"  
    },
    "万界": {
        en: "Rift of Dimensions"
    },
    "地图": {
        en: "Map"
    },
    "无成本物品": {
        en: "No Costs"
    },

    //
    "暂无排行数据": {
        en: "No data available"
    },
    "每分钟死亡": {
        en: "Maps/min"
    },
    "实际游戏时间": {
        en: "Time in Maps"
    },
    "排行榜加载中...": {
        en: "Loading Leaderboard..."
    },
    "主天赋": {
        en: "Main Talents"
    },
    "days赋分布": {
        en: "Atlas Talent Distribution"
    },
    "囚笼": {
        en: "Cage"
    },
    "幽邃": {
        en: "Profound",
    },
    "展开更多": {
        en: "Show More"
    },
    "收起": {
        en: "Show Less"
    },
    "总价": {
        en: "Total Price"
    },
    "种": {
        en: "Types"
    },
    "共": {
        en: "Total"
    },
    "掉率Items": {
        en: "Items Found"
    },
    "数量": {
        en: "Quantity"
    },
    "搜索标签": {
        en: "Search Tags"
    },
    "至少 30 张图参与统计": {
        en: ">30 maps required for statistics"
    },
    "未知玩法": {
        en: "Normal Mode"
    },
    "刷图时刻": {
        en: "Map Timemark"
    },
    "未知全部时刻": {
        en: "Unknown Timemark"
    },
    "排名": {
        en: "Rank"
    },
    "地图区域": {
        en: "Map Region"
    },
    "使用次数": {
        en: "# of Maps"
    },
    "地图玩法": {
        en: "Map Mode"
    },
    "区域": {
        en: "Region"
    },
    "玩法": {
        en: "Mode"
    },
    "请在游戏设置界面开启日志，点击返回登录，选择角色重新进入游戏": {
        en: "Please \"Enable Log\" in \"Settings -> Other\" then sort your backpack, or reselect your character"
    },
    "由于日志原因，棱镜无法区分稀有度，改为默认更新紫色价格": {
        en: "Due to log limitations, Prism rarity cannot be distinguished, defaulting to purple price updates"
    },
    "先在游戏设置内点击开启日志，然后重新选择角色进入游戏": {
        en: "Please \"Enable Log\" in \"Settings -> Other\" then sort your backpack, or reselect your character"
    },
    "调整极简模式下的文字大小（70% - 180%）": {
        en: "Adjust the font size in Mini Window mode (70% - 180%)"
    },
    "保存上一次记录的数据到历史记录，开始新的刷图记录": {
        en: "Archive session's data and reset, save to history"
    },
    "上传自定义图片（支持 JPG/PNG/GIF）": {
        en: "Upload custom image (JPG/PNG/GIF supported)"
    },
    "请整理背包或小退重选人物才能正常记录物品数据": {
        en: "Please \"Enable Log\" in \"Settings -> Other\" then sort your backpack, or reselect your character"
    },
    "选择背景图片（支持 JPG/PNG/GIF": {
        en: "Select background image (JPG/PNG/GIF supported)"
    },
    "基于当前时间范围汇总策略、收益与地图表现": {
        en: "Summarize strategy, profit, and map performance based on the current time range"
    },
    "根据当前时间范围汇总策略、收益和地图表现": {
        en: "Summarize strategy, profit, and map performance based on the requested time range"
    },
    "Current MapShow All": {
        en: "Current Map Show All"
    },
    "从当前时间范围的地图记录中提炼策略表现": {
        en: "Extract strategy performance from map records within the current time range"
    },
    "暂无策略数据，请先刷图或调整筛选条件": {
        en: "No strategy data available, please run maps or adjust filter criteria"
    },
    "归档当前数据并重置，保存到历史记录": {
        en: "Archive current data and reset, save to history"
    },
    "修复桌宠禁用仍显示成本推送的问题": {
        en: "Fixed issue where notification pet would still show cost alerts when disabled"
    },
    "从进第一张图到最后出图之间总时长": {
        en: "Total time from first map entry to last exit"
    },
    "调整界面布局，优化数据重置逻辑": {
        en: "Adjusted UI layout and optimized data reset logic"
    },
    "仅展示 K1 - 深空 的记录": {
        en: "Showing K1 - Deep Space records"
    },
    "开启后模拟主城挂机并加速触发": {
        en: "Simulates idle in town and speeds up triggers when enabled"
    },
    "新增桌宠形象以及支持自定义": {
        en: "Added notification pet images and support for customization"
    },
    "Current Map名称": {
        en: "Current Map Name"
    },
    "小窗桌宠新增成本余量提醒": {
        en: "Mini window notification pet added cost balance reminder"
    },
    "挂机、成本不足等提醒功能": {
        en: "Alerts for idle, insufficient cost, etc."
    },
    "按赛季统计角色死亡情况": {
        en: "Maps Ran by Season"
    },
    "易火记录中:S11赛季": {
        en: "Tracking: S11Season"
    },
    "日志未打开或背包未整理": {
        en: "Failed to load item data"
    },
    "注：传奇均为未鉴定价格": {
        en: "Note: Legendary items priced as unidentified"
    },
    "检测到上一次刷图数据": {
        en: "Last Session was on Character"
    },
    "小窗和极简模式调整": {
        en: "Mini Window and Minimal Mode Adjustments"
    },
    "优化设置界面内容项": {
        en: "Optimized settings UI content items"
    },
    "已显示（拖拽排序）": {
        en: "Visible (Drag to Sort)"
    },
    "画雪支持成本记录": {
        en: "Added cost item tracking for Snowpaper"
    },
    "优化历史记录模块": {
        en: "Optimized history module"
    },
    "切换效率统计单位": {
        en: "Toggle efficiency calculation unit (min/hour)"
    },
    "切换桌宠显示形象": {
        en: "Change notification pet appearance"
    },
    "未上传自定义形象": {
        en: "No custom image uploaded"
    },
    "保存并开始新记录": {
        en: "Save and Start New Session"
    },
    "收益按扣税显示": {
        en: "Display profit after tax"
    },
    "核心器官-戒指": {
        en: "Legendary Ring"
    },
    "核心器官-手套": {
        en: "Legendary Gloves"
    },
    "核心器官-头部": {
        en: "Legendary Helm"
    },
    "核心器官-项链": {
        en: "Legendary Ammy"
    },
    "核心器官-鞋子": {
        en: "Legendary Boots"
    },
    "核心器官-胸甲": {
        en: "Legendary Chest"
    },
    "核心器官-腰带": {
        en: "Legendary Belt"
    },
    "特殊器官-其它": {
        en: "Flawless Organ"
    },
    "完美肝脏-转伤": {
        en: "Flawless Liver"
    },
    "完美喉舌-祝福": {
        en: "Flawless Tongue"
    },
    "完美胚胎-召唤": {
        en: "Flawless Embryo"
    },
    "完美皮肤-防御": {
        en: "Flawless Skin"
    },
    "完美心脏-增益": {
        en: "Flawless Heart"
    },
    "完美眼球-减益": {
        en: "Flawless Eye"
    },
    "完美羽翼-持续": {
        en: "Flawless Wing"
    },
    "当前利/拾/本": {
        en: "Profit/Looted/Mapcost"
    },
    "你在主城发呆了": {
        en: "You're idle"
    },
    "要不要动一动？": {
        en: "Why not move around?"
    },
    "别忘了刷图哦！": {
        en: "Don't forget to run maps!"
    },
    "极简模式显示项": {
        en: "Mini Window Display Items"
    },
    "当前记录的角色": {
        en: "Character in Current Session"
    },
    "S11赛季在线": {
        en: "S11 ETOR Users:"
    },
    "易火 ETor": {
        en: "易火 ETor (CF)"
    },
    "易火-ETor": {
        en: "易火-ETor (CF)"
    },
    "总收益(扣税)": {
        en: "Total Profit (After Tax)"
    },
    "地图内时长累加": {
        en: "Total time spent in maps"
    },
    "地图 / 时间": {
        en: "Map / Time"
    },
    "平均收益/分钟": {
        en: "Avg Profit/Min"
    },
    "搜索策略/物品": {
        en: "Search Strategy/Items"
    },
    "日志监听状态": {
        en: "Log Listening Status"
    },
    "停止后台服务": {
        en: "Stop Background Service"
    },
    "重置数据确认": {
        en: "Confirm Data Reset"
    },
    "总计地图效率": {
        en: "Overall Efficiency"
    },
    "历史记录检测": {
        en: "Session Detected"
    },
    "记录状态异常": {
        en: "Error"
    },
    "继续当前记录": {
        en: "Continue Session"
    },
    "清空当前数据": {
        en: "Delete Session"
    },
    "最High价": {
        en: "Highest"
    },
    "暂无拾取记录": {
        en: "No loot records"
    },
    "请选择主类型": {
        en: "Select main type"
    },
    "暂无历史日期": {
        en: "No history dates"
    },
    "崇高辅助技能": {
        en: "Noble Support Skills"
    },
    "华贵辅助技能": {
        en: "Magnificent Support Skills"
    },
    "确定继续吗？": {
        en: "Are you sure to continue?"
    },
    "全部成本物品": {
        en: "Cost Items"
    },
    "棱镜水平仪": {
        en: "Prism Leveler"
    },
    "/分 用时": {
        en: "/min Duration"
    },
    "收益/分钟": {
        en: "Profit/Min"
    },
    "最Low价": {
        en: "Lowest"
    },
    "每分钟收益": {
        en: "Profit/Min"
    },
    "查看波动图": {
        en: "View price chart"
    },
    "仅最新版本": {
        en: "Latest only"
    },
    "竞速排行榜": {
        en: "Racing Leaderboard"
    },
    "剧情第一章": {
        en: "Chapter 1"
    },
    "剧情第二章": {
        en: "Chapter 2"
    },
    "剧情第三章": {
        en: "Chapter 3"
    },
    "全部主天赋": {
        en: "Atlas"
    },
    "更新日志": {
        en: "Changelog"
    },
    "更新内容": {
        en: "Update"
    },
    "显示设置": {
        en: "Display Settings"
    },
    "扣税显示": {
        en: "After Tax"
    },
    "效率单位": {
        en: "Efficiency Unit"
    },
    "桌宠设置": {
        en: "Notification Pet Settings"
    },
    "快速操作": {
        en: "Quick Actions"
    },
    "开始记录": {
        en: "Start Recording Data"
    },
    "停止记录": {
        en: "Stop Recording Data"
    },
    "服务状态": {
        en: "Service Status"
    },
    "日志路径": {
        en: "Log Path"
    },
    "最后更新": {
        en: "Last Updated"
    },
    "拾取历史": {
        en: "Loot History"
    },
    "安静时间": {
        en: "Quiet Time"
    },
    "最短间隔": {
        en: "Minimum Interval"
    },
    "最长间隔": {
        en: "Maximum Interval"
    },
    "出现时长": {
        en: "Notification Duration"
    },
    "渴瘾残肢": {
        en: "Amputated Limb"
    },
    "普通器官": {
        en: "Common Organ"
    },
    "知识之神": {
        en: "Goddess of Knowledge"
    },
    "原初之核": {
        en: "Traveler Entry"
    },
    "高塔筹码": {
        en: "TOWER Token"
    },
    "迷城残响": {
        en: "Aeterna Reverb"
    },
    "命运相关": {
        en: "Kismet Mats"
    },
    "侵蚀材料": {
        en: "Corrosion Mats"
    },
    "神格契约": {
        en: "Divinity Pact"
    },
    "升华之楔": {
        en: "Transcendence Wedge"
    },
    "追忆游丝": {
        en: "Memory Threads"
    },
    "特殊棱镜": {
        en: "Special Prism"
    },
    "异度棱镜": {
        en: "Ethereal Prism"
    },
    "当前效率": {
        en: "Current Efficiency:"
    },
    "未知惊喜": {
        en: "Unknown Loot"
    },
    "我先安静": {
        en: "Sleep for"
    },
    "字体大小": {
        en: "Font Size"
    },
    "未显示项": {
        en: "Hidden Items"
    },
    "桌宠提醒": {
        en: "Notification Pet Alerts"
    },
    "桌宠调试": {
        en: "Notification Pet Debug"
    },
    "桌宠形象": {
        en: "Notification Pet Appearance"
    },
    "纯黑模式": {
        en: "Dark BG"
    },
    "海绵宝宝": {
        en: "SpongeBob"
    },
    "选择图片": {
        en: "Select Image"
    },
    "桌宠参数": {
        en: "Notification Pet Settings"
    },
    "挂机阈值": {
        en: "Idle Threshold"
    },
    "收益/分": {
        en: "Profit/Min"
    },
    "当前地图": {
        en: "Current Map"
    },
    "平均收益": {
        en: "Avg Profit"
    },
    "当前范围": {
        en: "Current Range"
    },
    "当前会话": {
        en: "Current Session"
    },
    "刷新数据": {
        en: "Refresh Data"
    },
    "综合评分": {
        en: "Overall Score"
    },
    "数据分析": {
        en: "Strategy Analysis"
    },
    "物价波动": {
        en: "Price Fluctuation"
    },
    "当前均价": {
        en: "Avg Price"
    },
    "被动技能": {
        en: "Passive Skills"
    },
    "辅助技能": {
        en: "Support Skills"
    },
    "主动技能": {
        en: "Active Skills"
    },
    "历史记录": {
        en: "History"
    },
    "策略分析": {
        en: "Strategy Analysis"
    },
    "小窗模式": {
        en: "Mini Window"
    },
    "正在记录": {
        en: "Active"
    },
    "等待进入": {
        en: "Waiting"
    },
    "背包价值": {
        en: "Inventory Value"
    },
    "火/分钟": {
        en: "🔥/min"
    },
    "图内时长": {
        en: "In-Map Time"
    },
    "实际时长": {
        en: "Actual Time"
    },
    "地图次数": {
        en: "Map Runs"
    },
    "地图日志": {
        en: "Map Log"
    },
    "地图记录": {
        en: "Map Records"
    },
    "暂无记录": {
        en: "No records yet"
    },
    "跟随地图": {
        en: "Follow Map"
    },
    "清除数据": {
        en: "Clear Data"
    },
    "切换显示": {
        en: "Toggle Display"
    },
    "价格过滤": {
        en: "Price Filter"
    },
    "搜索物品": {
        en: "Search items"
    },
    "更新时间": {
        en: "Updated"
    },
    "传奇装备": {
        en: "Legendary Equipment"
    },
    "通用道具": {
        en: "General Items"
    },
    "装备蓝图": {
        en: "Equipment Blueprint"
    },
    "选择角色": {
        en: "Select Character"
    },
    "轮次模式": {
        en: "Round Mode"
    },
    "日期选择": {
        en: "Date Selection"
    },
    "勇者之证": {
        en: "Proof of the Brave"
    },
    "画中雪原": {
        en: "Snowpaper"
    },
    "地图效率": {
        en: "Efficiency"
    },
    "棱镜校尺": {
        en: "Prism Gauge"
    },
    "收益趋势": {
        en: "Profit Trend"
    },
    "触媒技能": {
        en: "Activation Medium Skills"
    },
    "死亡次数": {
        en: "Maps ran"
    },
    "确认操作": {
        en: "Confirm Action (Deletion?)"
    },
    "暂无数据": {
        en: "No Data"
    },
    "暂无物品": {
        en: "No Items"
    },
    "人物名称": {
        en: "Character Name"
    },
    "欺诈之神": {
        en: "Goddess of Deception"
    },
    "神威纹章": {
        en: "Divinity Emblem"
    },
    "全部区域": {
        en: "Region"
    },
    "全部玩法": {
        en: "Mode"
    },
    "全部时刻": {
        en: "Timemark"
    },
    "趋势分析": {
        en: "Trend Analysis"
    },
    "运行中": {
        en: "Running"
    },
    "已关闭": {
        en: "Disabled"
    },
    "透明度": {
        en: "Background Blur"
    },
    "状态:": {
        en: "Status:"
    },
    "已开启": {
        en: "Enabled"
    },
    "我数到": {
        en: "I counted to"
    },
    "价折算": {
        en: "Price Conversion"
    },
    "原模式": {
        en: "Light BG"
    },
    "皮卡丘": {
        en: "Pikachu"
    },
    "杰尼龟": {
        en: "Squirtle"
    },
    "派大星": {
        en: "Patrick"
    },
    "自定义": {
        en: "Custom BG"
    },
    "未显示": {
        en: "Hidden"
    },
    "知道了": {
        en: "Ok"
    },
    "总拾取": {
        en: "Ttl Loot"
    },
    "总成本": {
        en: "Ttl Cost"
    },
    "总用时": {
        en: "Total Time"
    },
    "总次数": {
        en: "Total Maps"
    },
    "策略榜": {
        en: "Strategy Leaderboard"
    },
    "均耗时": {
        en: "Avg Time"
    },
    "未记录": {
        en: "Offline"
    },
    "涨跌幅": {
        en: "Change"
    },
    "价格库": {
        en: "Price Database"
    },
    "排行榜": {
        en: "Leaderboard"
    },
    "记录中": {
        en: "Tracking"
    },
    "总收益": {
        en: "Total Profit"
    },
    "最小化": {
        en: "Minimize"
    },
    "最大化": {
        en: "Maximize"
    },
    "主类型": {
        en: "Main Type"
    },
    "子类型": {
        en: "Sub Type"
    },
    "渴饮症": {
        en: "Vorax"
    },
    "未设置": {
        en: "Not set"
    },
    "总价值": {
        en: "Total Value"
    },
    "件物品": {
        en: "Items"
    },
    "上一页": {
        en: "Previous"
    },
    "下一页": {
        en: "Next"
    },
    "价格高": {
        en: "Price High"
    },
    "价格低": {
        en: "Price Low"
    },
    "竞速榜": {
        en: "Racing Leaderboard"
    },
    "爱玩榜": {
        en: "Maps Leaderboard"
    },
    "更新于": {
        en: "Updated At"
    },
    "无天赋": {
        en: "None"
    },
    "刷新": {
        en: "Refresh"
    },
    "缝线": {
        en: "Suture"
    },
    "梦语": {
        en: "Shallow Dream"
    },
    "香料": {
        en: "Herbs"
    },
    "元件": {
        en: "Mods"
    },
    "命运": {
        en: "Kismet"
    },
    "未知": {
        en: "Unknown"
    },
    "设置": {
        en: "Settings"
    },
    "上移": {
        en: "Move Up"
    },
    "下移": {
        en: "Move Down"
    },
    "状态": {
        en: "Status"
    },
    "默认": {
        en: "Default"
    },
    "牛牛": {
        en: "Cow"
    },
    "计税": {
        en: "After Tax"
    },
    "总计": {
        en: "Show All"
    },
    "场均": {
        en: "Avg Map"
    },
    "图内": {
        en: "Current Map"
    },
    "策略": {
        en: "Strategy"
    },
    "评分": {
        en: "Score"
    },
    "趋势": {
        en: "Trend"
    },
    "信标": {
        en: "Beacon"
    },
    "化石": {
        en: "Fossil"
    },
    "钢图": {
        en: "Steel Forge"
    },
    "雷图": {
        en: "Thunder Wastes"
    },
    "冰图": {
        en: "Glacial Abyss"
    },
    "火图": {
        en: "Lava Sea"
    },
    "暗图": {
        en: "Void Lands"
    },
    "本周": {
        en: "Week"
    },
    "本月": {
        en: "Month"
    },
    "探针": {
        en: "Probe"
    },
    "本图": {
        en: "This Map"
    },
    "次数": {
        en: "Runs"
    },
    "用时": {
        en: "Duration"
    },
    "小时": {
        en: "Hour"
    },
    "每日": {
        en: "Daily"
    },
    "总览": {
        en: "Overview"
    },
    "物品": {
        en: "Items"
    },
    "扣税": {
        en: "After Tax"
    },
    "实际": {
        en: "Actual"
    },
    "拾取": {
        en: "Loot"
    },
    "成本": {
        en: "Cost"
    },
    "收益": {
        en: "Profit"
    },
    "效率": {
        en: "Efficiency"
    },
    "时长": {
        en: "Duration"
    },
    "重置": {
        en: "Reset"
    },
    "关闭": {
        en: "Close"
    },
    "点击": {
        en: "Click"
    },
    "清空": {
        en: "Clear"
    },
    "背包": {
        en: "Backpack"
    },
    "仓库": {
        en: "Storage"
    },
    "全部": {
        en: "All"
    },
    "技能": {
        en: "Skills"
    },
    "其他": {
        en: "Other"
    },
    "通货": {
        en: "Currency"
    },
    "单价": {
        en: "Unit Price"
    },
    "分页": {
        en: "Pagination"
    },
    "装备": {
        en: "Equipment"
    },
    "列表": {
        en: "List"
    },
    "蓝图": {
        en: "Blueprint"
    },
    "辅助": {
        en: "Support"
    },
    "触媒": {
        en: "Catalyst"
    },
    "精密": {
        en: "Precision"
    },
    "极武": {
        en: "Ultimate"
    },
    "角色": {
        en: "Character"
    },
    "轮次": {
        en: "Round"
    },
    "已选": {
        en: "Selected"
    },
    "今日": {
        en: "Today"
    },
    "英雄": {
        en: "Hero"
    },
    "深空": {
        en: "Deep Space"
    },
    "取消": {
        en: "Cancel"
    },
    "确认": {
        en: "Confirm"
    },
    "平均": {
        en: "Average"
    },
    "分钟": {
        en: "min"
    },
    "赛季": {
        en: "Season"
    },
    "秒": {
        en: "seconds"
    },
    "每": {
        en: "Per"
    },
    "件": {
        en: " pcs"
    },
    "条": {
        en: " entries"
    },
    "高": {
        en: "High"
    },
    "低": {
        en: "Low"
    },
    "新": {
        en: "New"
    },
    "旧": {
        en: "Old"
    },
    "天": {
        en: " days"
    },
    "轮": {
        en: " rounds"
    },
    "近": {
        en: "Recent"
    },
    "总": {
        en: "Total"
    },
    "火": {
        en: "🔥"
    },
    " 分": {
        en: " mins"
    },
    "时": {
        en: "Hour"
    }
}

const buildLangMap = (lang: Lang): Record<string, string> => {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries({ ...atlasTalentTranslations,...tempBruteForceTranslations, ...characterClassTranslations, ...notificationPetTranslations, ...patchNotes, ...seasonTranslations, ...uiTranslations })) {
        result[key] = value[lang] ?? value.en;
    }
    return result;
};

export const uiTranslationsMap = {
    en: buildLangMap("en"),
    ko: buildLangMap("ko"),
    ja: buildLangMap("ja"),
    ru: buildLangMap("ru"),
};