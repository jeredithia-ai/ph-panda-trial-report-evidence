const phaseData = {
  before: {
    title: "课前环节",
    tag: "Pre-Class",
    competitor: [
      "AI 分层外呼提醒：提前 1 天、课前 2 小时、课前 5 分钟触达；开课 15 分钟未进课堂追加提醒。",
      "试听配套物料完整：课程流程、本节目标、重点词句、学习难点、设备指引。",
      "中英双语课堂资源（课堂用语 + 操作动画）作为基础包。（竞品已标配）",
      "标准化定级抓手：测评未完成时，销售依托固定访谈问卷输出参考分。"
    ],
    current: [
      "定级测试当前稳定性不足：测评结果偏差较大，老师需口播确认 level。",
      "课前提醒链路不足：AI 提醒触达不稳，影响准时上课。",
      "课前物料不足：指令视频、IP 介绍视频、课件动画演示等供给不完整。",
      "学生信息链路已通但执行弱：外教不主动看备注，教学侧需培训并强约束。",
      "课件页数偏多：需在 10 天内完成减页验证，避免课堂过载。"
    ],
    focusBlocks: [
      {
        title: "定级测试现存问题（课前）",
        summary: "竞品测评入口便捷、结果参考性更强；我们当前稳定性不足，影响一线销售推荐意愿。",
        groups: [
          {
            name: "当前问题",
            items: [
              "测评结果与学生真实英语水平存在偏差，复测一致性不足。",
              "销售担心误导家长，不愿主动把定级测试作为首推入口。"
            ]
          },
          {
            name: "一线替代方案（人工粗分）",
            items: [
              "前置询问年龄、所在城市，结合学习经历做初筛。",
              "用典型词汇（如 yummy / yucky）判断理解与表达层级。",
              "人工方式可应急，但缺乏标准化与可复盘性。"
            ]
          },
          {
            name: "优化方向",
            items: [
              "先修复定级稳定性，再恢复销售主推。",
              "产品补齐“定级结果解释”与“建议课程映射”页面。",
              "学科与销售共建话术，减少家长感知偏差。"
            ]
          }
        ]
      },
      {
        title: "学生信息链路补充说明（课前）",
        summary: "系统可同步不代表执行闭环已成立，必须明确外教侧执行约束。",
        groups: [
          {
            name: "当前链路现状",
            items: ["销售端可录入学生备注信息。", "备注内容可同步至教师端页面。"]
          },
          {
            name: "落地痛点",
            items: ["大量外教不会主动查看销售备注。", "授课执行与前期备注信息脱节，链路价值被削弱。"]
          },
          {
            name: "约束与要求",
            items: [
              "外教培训中必须加入“课前备注必读”硬约束。",
              "课前工作台增加“已阅读备注”打卡与抽检机制。",
              "把备注命中率纳入教学执行考核。"
            ]
          }
        ]
      }
    ],
    dimensionMap: [
      { name: "课件", focus: "预习仅保留闪卡互动，不提前开放完整课件，并补齐 AI 讲解卡片与操作动画。", kpi: "预习物料使用率 >= 90%", measure: "预习行为日志" },
      { name: "老师", focus: "老师课前必须查看 AI 汇总学情标签、风险提醒与授课亮点模板。", kpi: "课前信息读取率 >= 95%", measure: "外教工作台日志" },
      { name: "学生链路", focus: "家长/学生定级测试数据拆分，访谈信息结构化沉淀，并由 AI 自动生成学情摘要。", kpi: "定级问卷覆盖率 >= 95%", measure: "销售填报看板" },
      { name: "课前提醒", focus: "家长/学生 + 老师双通道 AI 分层触达，缺席后补触达闭环。", kpi: "外呼触达率 >= 95%", measure: "触达链路日志" }
    ],
    summary: {
      owner: "产品负责人",
      due: "W1",
      focus: "销售先建信任，再用课前物料放大价值；教学必须培训老师先看学生信息"
    },
    p0Top3: [
      { owner: "产品", action: "上线家长/学生+老师双通道 AI 分层提醒，覆盖课前与缺课补触达。", kpi: "外呼触达率 >= 95%" },
      { owner: "教学", action: "建立老师课前必读学生信息机制，并纳入抽检。", kpi: "课前信息读取率 >= 95%" },
      { owner: "教研", action: "课前仅保留高价值预习物料，不提前开放完整课件。", kpi: "预习物料使用率 >= 90%" }
    ],
    actions: {
      产品: {
        priority: "P0",
        owner: "产品负责人",
        due: "W1",
        threshold: "外呼触达率 >= 95%",
        items: ["上线品牌 AI 智能分层外呼提醒（家长/学生 + 老师双通道、分时段触达）。", "缺课后 1 小时内 AI 自动补触达并同步销售。", "定级测试 App 埋点轻量化：按家长/学生双人群拆分设计。", "AI 自动汇总家长输入、历史试听记录与风险标签，课前推送给销售和外教。"]
      },
      教研: {
        priority: "P0",
        owner: "教研负责人",
        due: "W1",
        threshold: "预习物料使用率 >= 90%",
        items: ["预习仅提供闪卡互动游戏，不开放完整课件。", "输出标准化中英双语课堂资源：课堂用语 + 操作动画。（竞品已标配）", "补充 AI 预习导览卡：自动解释课堂目标、难点词汇与操作路径。"]
      },
      教学: {
        priority: "P0",
        owner: "教学负责人",
        due: "W1",
        threshold: "老师课前备课达标率 >= 90%",
        items: ["建立试听老师分层规则（高阶/基础）并匹配学员意向等级。", "输出课前备课模板，明确每节试听课 2-3 个亮点环节预案。", "教学负责人必须培训老师课前查看学生信息与素材后再上课。", "老师侧工作台新增 AI 学情摘要与授课提醒，减少人工翻阅成本。"]
      },
      销售: {
        priority: "P0",
        owner: "销售负责人",
        due: "W1",
        threshold: "建联完成率 >= 95%",
        items: ["建立家长建联话术：先明确家长要解决的问题，再匹配课程方案。", "销售执行学科输出的定级测试 App 基本操作指引，确保首通可落地。", "销售需要把学情信息与定级结果直通外教工作台。", "销售需及时同步家长期待与风险点到 OPS，回传外教课前准备。", "AI 自动生成首通建联摘要与推荐物料包，缩短销售准备时长。"]
      },
      学科: {
        priority: "P0",
        owner: "学科负责人",
        due: "W1",
        threshold: "定级参考覆盖率 >= 95%",
        items: ["学科包装并输出销售标准化定级访谈问卷（场景问法 + 参考分口径）。", "学科优化课前海报及家长物料（难点预习/流程说明/设备指引），并补齐家长侧说明引导文案。", "学科输出定级测试 App 基本操作指引并交付销售执行。", "学科制定销售使用物料 SOP，规范家长期待记录与分发。"]
      }
    }
  },
  during: {
    title: "课中环节",
    tag: "In-Class",
    competitor: [
      "课件轻量化，动画占比可控。",
      "每页配套足量练习任务，优先保障学员开口输出。",
      "长单词按音节拆分示范（如 clap-1/clap-2）+ 拍手节奏 + TPR 动作辅助理解。",
      "识别重复提问等理解受阻信号，及时调整授课节奏。",
      "课中固定 2-3 亮点设计并可稳定复现（讲解模板 + 动作模板 + 示例模板）。"
    ],
    current: [
      "课件动画偏多、切换节奏快，部分动画无配套口语练习。",
      "单节有效开口输出不足。",
      "部分外教学情识别不足，缺少标准化引导手段。",
      "沉默型学员（腼腆/不爱开口群体）缺少专门引导方案。",
      "已有试听课讲解流程，但缺少课程亮点设计与讲解分析，家长难感知学习增量。"
    ],
    threeLine: {
      problem: "问题：已有试听课讲解流程，但缺少课程亮点设计与讲解分析，家长难感知学习增量。",
      action: "动作：教研 + 培训共建亮点设计卡与四段式授课脚本（开场建联-亮点讲解-纠错提示-收口复述）。",
      metric: "指标：亮点命中率 >= 90%，家长复述课堂亮点准确率 >= 85%。"
    },
    dimensionMap: [
      { name: "课件", focus: "精简低效动画，提升单页训练深度。", kpi: "单页有效练习点 >= 3", measure: "课件抽检" },
      { name: "老师", focus: "标准化提问、纠错、TPR 引导动作，执行 2-3 亮点模板。", kpi: "标准动作达标率 >= 90%", measure: "课堂质检" },
      { name: "学生链路", focus: "课堂理解受阻信号要可记录可复盘。", kpi: "理解受阻处置及时率 >= 90%", measure: "教学日志" },
      { name: "课前提醒", focus: "课前信息准确传递以减少课中卡顿。", kpi: "课前信息命中率 >= 95%", measure: "课前-课中一致性复盘" }
    ],
    summary: {
      owner: "教学负责人",
      due: "W2",
      focus: "把课堂亮点沉淀成家长可感知的开口与复述证据"
    },
    p0Top3: [
      { owner: "教研", action: "固化每节试听课 2-3 个课程亮点点位与示例。", kpi: "单页有效练习点 >= 3" },
      { owner: "教学", action: "老师执行四段式脚本，保证亮点讲解与复述收口。", kpi: "标准动作达标率 >= 90%" },
      { owner: "销售", action: "课后复述课堂亮点并给出下一步方案。", kpi: "课堂价值复述准确率 >= 90%" }
    ],
    actions: {
      产品: {
        priority: "P1",
        owner: "产品负责人",
        due: "W3",
        threshold: "形成可落地方案",
        items: ["设计课堂表现新抓手：有效沟通时长、学生主动提问、课堂练习正确率。", "调研开口次数识别误差并定义校准规则，避免仅看视频口型计数。", "调研课堂高光瞬间自动捕捉可行性，优先抓取固定教学亮点位并回传课后报告。"]
      },
      教研: {
        priority: "P0",
        owner: "教研负责人",
        due: "W2",
        threshold: "开口频次提升 >= 20%",
        items: ["评估并精简无效动画。", "增加口语练习节点，提升有效开口频次。", "将试听课 2-3 亮点环节固化为课件点位。", "输出“课程亮点设计卡”（亮点目标/老师话术/学生输出动作/家长可见结果）。"]
      },
      教学: {
        priority: "P0",
        owner: "教学负责人",
        due: "W2",
        threshold: "标准动作达标率 >= 90%",
        items: ["每节试听课固定 2-3 个标准案例，逐页给出讲解办法与复述触发点。", "沉默型学员差异化引导训练：缓解畏难，适配慢速节奏，提升主动开口（开口次数提升）。", "培训侧输出“老师具体怎么上”脚本：开场建联、亮点讲解、纠错提示、收口复述四段式。", "按高阶/基础老师分层监控试听转化。"]
      },
      销售: {
        priority: "P0",
        owner: "销售负责人",
        due: "W2",
        threshold: "课堂价值复述准确率 >= 90%",
        items: ["销售实时跟进课堂亮点，向家长复述“本节具体解决了什么问题”。", "针对不同学员家长输出对应专属解释模板（如慢速节奏+开口提升）。"]
      },
      学科: {
        priority: "P0",
        owner: "学科负责人",
        due: "W2",
        threshold: "课堂抽检达标率 >= 90%",
        items: ["沉淀优秀课堂示例并做教学亮点包装，形成可复用案例。", "与教学共建“2-3 亮点环节”示例库并同步课后报告映射。", "周度输出优秀案例复盘，反哺教学培训。"]
      }
    }
  },
  after: {
    title: "课后环节",
    tag: "Post-Class",
    competitor: [
      "课后报告支持嵌入课堂截图与精彩片段，并预留独立个性化评价区域。",
      "依托课堂实时数据与外教快速评分，下课后即时生成反馈并展示开口数据。",
      "销售下课 10-20 分钟内可基于报告完成跟进。"
    ],
    current: [
      "课后报告模板固化，个性化空间有限。",
      "缺少课堂影像素材支撑。",
      "无专属学员个性化点评板块。",
      "开口频次无法直观呈现，销售下课后抓手不足。",
      "未转化学生缺少结构化看板，无法快速看清学生情况、课程情况与未转化原因。"
    ],
    conversionBoard: {
      title: "未转化学生梳理看板（课后）",
      fields: ["学生情况（年龄/基础/开口意愿）", "课程情况（亮点命中/开口质量/节奏匹配）", "未转化原因（价格/目标偏差/信任未建立）"],
      pollyRef: "借鉴 Polly：每节课后同步收集课程评分、老师评分、家长文字建议。",
      cta: "试听课后一键征集家长建议"
    },
    dimensionMap: [
      { name: "课件", focus: "AI 课后报告承接课堂训练重点与错因，并自动映射课堂亮点与精彩瞬间。", kpi: "报告完整率 >= 95%", measure: "报告生成日志" },
      { name: "老师", focus: "课后 5 分钟内完成结构化评价录入，由 AI 自动生成可发家长的评价初稿。", kpi: "5 分钟评价回收率 >= 90%", measure: "课后评价回收日志" },
      { name: "学生链路", focus: "转化/未转化分层沉淀，未转化学生分析记录可追踪，并由 AI 自动归因聚类。", kpi: "未转化原因记录率 >= 95%", measure: "未转化复盘表" },
      { name: "课前提醒", focus: "二次电话前由 AI 汇总课堂表现、家长反馈与下一步建议，帮助销售快速跟进。", kpi: "二次电话完成率 >= 90%", measure: "二次跟进台账" }
    ],
    summary: {
      owner: "销售负责人",
      due: "W2",
      focus: "5 分钟家长反馈回收 + 二次电话携带报告给出解决方案"
    },
    p0Top3: [
      { owner: "产品", action: "上线未转化看板字段：学生情况、课程情况、未转化原因。", kpi: "未转化原因记录率 >= 95%" },
      { owner: "销售", action: "课后 5 分钟发起家长反馈，并完成二次电话建议。", kpi: "20 分钟内触达率 >= 90%" },
      { owner: "教学", action: "老师 5 分钟内提交结构化课后评价。", kpi: "5 分钟评价回收率 >= 90%" }
    ],
    actions: {
      产品: {
        priority: "P0",
        owner: "产品负责人",
        due: "W2-W3",
        threshold: "报告可用率 >= 95%",
        items: ["迭代课后 AI 学习报告体系。", "弱化外教主观长评，改为核心维度勾选 + AI 综合评价。", "支持中英译文展示，统计开口频次并抓取课堂精彩瞬间（与课中 2-3 亮点对应）。", "新增未转化看板字段：学生情况 + 课程情况 + 未转化原因，按课次沉淀。"]
      },
      教研: {
        priority: "P0",
        owner: "教研负责人",
        due: "W2",
        threshold: "报告内容可解释率 >= 90%",
        items: ["统一课后报告术语与家长可理解表达。", "输出“本节亮点-学生问题-解决动作”模板。", "确保报告可直接用于销售二次沟通。"]
      },
      教学: {
        priority: "P0",
        owner: "教学负责人",
        due: "W2",
        threshold: "5 分钟评价回收率 >= 90%",
        items: ["下课 5 分钟内老师完成结构化评价录入，AI 自动生成家长可读版本。", "老师评价需绑定本节 2-3 亮点与学生表现。", "评价结果同步销售与学科看板，并沉淀为 AI 训练样本。"]
      },
      销售: {
        priority: "P0",
        owner: "销售负责人",
        due: "W2",
        threshold: "20 分钟内触达率 >= 90%",
        items: ["课后 5 分钟向家长发起即时反馈问询，记录本节感知与疑虑。", "二次电话前由 AI 汇总课堂表现、家长反馈与建议话术，帮助销售快速跟进。", "建立未转化学生分析记录（按老师层级/课堂亮点/家长诉求拆解）。", "每节试听课推动家长点击“强反馈按钮”，完成课程评分、老师评分与建议回收。"]
      },
      学科: {
        priority: "P0",
        owner: "学科负责人",
        due: "W2",
        threshold: "未转化分析完整率 >= 95%",
        items: ["周度输出转化/未转化对比复盘，反哺课程与师资策略。", "与销售共建“问题-方案-结果”标准案例库。", "优秀案例由学科统一包装，回灌销售与教学。"]
      }
    }
  }
};

const followupTodo = [
  {
    title: "学生链路打通",
    owner: "Selena + 产品 + 销售",
    due: "By 7-30",
    status: "部分确认",
    detail: "已部分确认；产品侧已给出与新版 CRM 页面联动方案，当前在设计中。"
  },
  {
    title: "课件页数评估",
    owner: "Selena + 培训",
    due: "By 8-02",
    status: "评估中",
    detail: "初步确认部分课件页数偏多，需要评估是否造成课时过载与当堂完课压力。"
  }
];

const benchmarkPriceData = [
  {
    brand: "Polly",
    conversion: "12%-15%",
    price: "55-65",
    punchline: "中高等价格带 + 较稳转化，核心在学习路径可解释、家长容易理解价值。"
  },
  {
    brand: "VIPKID",
    conversion: "13%-16%",
    price: "60-65",
    punchline: "高价但转化仍高，说明家长愿为“清晰路径 + 稳定结果”买单。"
  },
  {
    brand: "51Talk",
    conversion: "10%-12%",
    price: "40-50",
    punchline: "价格更低但转化不必然最高，单靠低价难替代价值感知与服务确定性。"
  }
];

const systemPunchlines = [
  "自研欧美课程转化高：课程脉络从低阶到高阶连贯，家长可一站式规划。",
  "PU 转化偏弱：销售存在路径依赖，RH 购买账号持续被优先推荐，低阶到高阶衔接被动割裂。",
  "RH 优势：高阶课程链路完整，家长更容易建立长期学习预期。"
];

const benchmarkEvidence = [
  { zone: "bp-polly-app", label: "Polly APP 页面设计（引导强）" },
  { zone: "bp-post-resource", label: "竞品课后资源（绘本+单词+音频）" },
  { zone: "bp-parent-report", label: "家长信息回收与客户报告素材（含建议模板）" }
];

const compareMatrix = {
  columns: ["PH（Panda）", "欧美", "北美"],
  rows: [
    {
      name: "自研课",
      cells: [
        { key: "ph-self", value: "7.23%", tone: "high" },
        { key: "eu-self", value: "18.94%", tone: "low" },
        { key: "na-self", value: "12.19%", tone: "mid" }
      ]
    },
    {
      name: "Power Up",
      cells: [
        null,
        { key: "eu-pu", value: "13.74%", tone: "mid" },
        { key: "na-pu", value: "12.11%", tone: "mid" }
      ]
    },
    {
      name: "RH",
      cells: [null, null, { key: "na-rh", value: "25.12%", tone: "low" }]
    }
  ]
};

const compareDetails = {
  "ph-self": {
    title: "PH（Panda）自研课",
    result: "7.23%",
    risk: "高",
    tag: "风险高：当前提升对象",
    reason: "价值表达弱于“25 分钟有效练习”预期，课前触达与课中开口深度未形成稳定闭环。",
    decision: "必须同时优化课件、老师执行、学生链路与课前提醒，不能只换教材。"
  },
  "ph-pu": {
    title: "PH（Panda）Power Up",
    result: "11.34%",
    risk: "中",
    tag: "达标中：需控波动",
    reason: "当前转化高于阶段底线，但不同老师与渠道波动明显，稳定性仍需观察。",
    decision: "管理重点从“拉高”转为“稳态”：统一话术、统一亮点复述、统一课后跟进节奏。"
  },
  "eu-self": {
    title: "欧美自研课",
    result: "18.94%",
    risk: "低",
    tag: "表现高：价格与质量更平衡",
    reason: "欧美老师在自研课场景下，家长对“质量-价格平衡”的感知更强。",
    decision: "PH 需要证明自己虽更便宜，但每一分钟也能被有效利用。"
  },
  "na-self": {
    title: "北美自研课",
    result: "12.19%",
    risk: "中",
    tag: "中等：质量高但价格更高",
    reason: "北美老师质量感知强，但价格更高，转化并非必然高于欧美。",
    decision: "提醒 PH：价格优势必须与可见练习价值一起表达。"
  },
  "eu-pu": {
    title: "欧美 Power Up",
    result: "13.74%",
    risk: "中",
    tag: "需验证：不高于欧美自研课",
    reason: "PU 市场可选择性强，若只做教材切换，未必带来更高转化。",
    decision: "PU 不是天然解法，要靠老师执行与销售话术共同证明价值。"
  },
  "na-pu": {
    title: "北美 Power Up",
    result: "12.11%",
    risk: "中",
    tag: "需验证：价格压力更明显",
    reason: "北美老师价格高，且 PU 不稀缺，家长替代选择多。",
    decision: "PH 承接 PU 的前提是讲清楚、练充分、少投诉。"
  },
  "na-rh": {
    title: "北美 RH",
    result: "25.12%",
    risk: "低",
    tag: "高表现：稀缺性强",
    reason: "RH 高转化兼有高质量老师与低替代性，不可直接类比 PU。",
    decision: "RH 的高表现不能直接证明 PU 也会高转化。"
  }
};

let editMode = false;
let activeCompareKey = "ph-self";
let activePhaseKey = "before";
const mediaStore = {};
const MEDIA_STORAGE_KEY = "ph-panda-media-store-v1";
const MAX_PERSIST_IMAGE_BYTES = 1024 * 1024 * 1.5;
// Keep storage under common browser quotas for reliable persistence.
const MAX_STORAGE_CHARS = 4_000_000;

function evidenceUploader(zone, label) {
  return `
    <div class="phase-evidence" data-media-zone="${zone}">
      <div class="label">${label}</div>
      <div class="upload-actions edit-only">
        <button class="u-btn" type="button" data-action="pick-image">图片</button>
        <button class="u-btn" type="button" data-action="pick-video">视频</button>
        <button class="u-btn save" type="button" data-action="save-zone" data-zone="${zone}">保存</button>
        <button class="u-btn danger" type="button" data-action="clear-zone">删除</button>
      </div>
      <div class="link-compose edit-only">
        <input class="link-input" type="text" data-link-url placeholder="粘贴网页链接（https://...）" />
        <input class="link-input" type="text" data-link-title placeholder="链接标题（可选）" />
        <button class="u-btn" type="button" data-action="add-link">添加链接</button>
      </div>
      <p class="save-tip edit-only" id="save-tip-${zone}">未保存</p>
      <input class="hidden-input edit-only" type="file" accept="image/*" multiple data-kind="image" />
      <input class="hidden-input edit-only" type="file" accept="video/*" multiple data-kind="video" />
      <div class="preview media-block">
        <section class="media-section" data-media-section="link">
          <div class="media-sub-title">网页链接</div>
          <div class="media-gallery" id="gallery-link-${zone}"></div>
        </section>
        <section class="media-section" data-media-section="image">
          <div class="media-sub-title">图片</div>
          <div class="media-gallery" id="gallery-image-${zone}"></div>
        </section>
        <section class="media-section" data-media-section="video">
          <div class="media-sub-title">视频</div>
          <div class="media-gallery" id="gallery-video-${zone}"></div>
        </section>
      </div>
    </div>
  `;
}

function saveMediaStore() {
  try {
    const persisted = {};
    Object.keys(mediaStore).forEach((zone) => {
      const items = Array.isArray(mediaStore[zone]) ? mediaStore[zone] : [];
      persisted[zone] = items.filter((x) => x && x.persistable === true);
    });
    localStorage.setItem(MEDIA_STORAGE_KEY, JSON.stringify(persisted));
  } catch (_err) {
    // Ignore storage failures.
  }
}

function markZoneSaved(zone, text) {
  const tip = document.getElementById(`save-tip-${zone}`);
  if (!tip) return;
  tip.textContent = text;
}

function loadMediaStore() {
  try {
    const raw = localStorage.getItem(MEDIA_STORAGE_KEY);
    if (!raw) return;
    if (raw.length > MAX_STORAGE_CHARS) {
      localStorage.removeItem(MEDIA_STORAGE_KEY);
      return;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    Object.keys(parsed).forEach((zone) => {
      const items = Array.isArray(parsed[zone]) ? parsed[zone] : [];
      mediaStore[zone] = items
        .filter((x) => x && (x.type === "image" || x.type === "video" || x.type === "link") && typeof x.src === "string")
        .map((x) => ({ ...x, persistable: true }));
    });
  } catch (_err) {
    // Ignore parse failures.
  }
}

function renderGallery(zone) {
  const linkGallery = document.getElementById(`gallery-link-${zone}`);
  const imageGallery = document.getElementById(`gallery-image-${zone}`);
  const videoGallery = document.getElementById(`gallery-video-${zone}`);
  if (!linkGallery || !imageGallery || !videoGallery) return;
  const evidenceRoot = imageGallery.closest("[data-media-zone]");
  const linkSection = linkGallery.closest("[data-media-section='link']");
  const imageSection = imageGallery.closest("[data-media-section='image']");
  const videoSection = videoGallery.closest("[data-media-section='video']");

  const list = mediaStore[zone] || [];

  const images = list
    .map((item, idx) => ({ item, idx }))
    .filter((x) => x.item.type === "image");
  const videos = list
    .map((item, idx) => ({ item, idx }))
    .filter((x) => x.item.type === "video");
  const links = list
    .map((item, idx) => ({ item, idx }))
    .filter((x) => x.item.type === "link");

  linkGallery.innerHTML = links.length
    ? links
        .map(
          ({ item, idx }) => `
      <article class="media-link-item">
        <a class="link-preview-btn" href="${item.src}" target="_blank" rel="noopener noreferrer">打开网页</a>
        <span class="media-link-label">${item.name}</span>
        <button type="button" class="remove-btn" data-action="remove-item" data-zone="${zone}" data-idx="${idx}">删</button>
      </article>
    `
        )
        .join("")
    : "";

  imageGallery.innerHTML = images.length
    ? images
        .map(
          ({ item, idx }) => `
      <article class="media-link-item">
        <button type="button" class="link-preview-btn" data-action="preview-item" data-zone="${zone}" data-idx="${idx}">点击查看素材</button>
        <span class="media-link-label">${item.name}</span>
        <button type="button" class="remove-btn" data-action="remove-item" data-zone="${zone}" data-idx="${idx}">删</button>
      </article>
    `
        )
        .join("")
    : "";

  videoGallery.innerHTML = videos.length
    ? videos
        .map(
          ({ item, idx }) => `
      <article class="media-link-item">
        <button type="button" class="link-preview-btn" data-action="preview-item" data-zone="${zone}" data-idx="${idx}">点击查看素材</button>
        <span class="media-link-label">${item.name}</span>
        <button type="button" class="remove-btn" data-action="remove-item" data-zone="${zone}" data-idx="${idx}">删</button>
      </article>
    `
        )
        .join("")
    : "";

  if (linkSection) {
    linkSection.classList.toggle("hidden-empty", !editMode && links.length === 0);
  }
  if (imageSection) {
    imageSection.classList.toggle("hidden-empty", !editMode && images.length === 0);
  }
  if (videoSection) {
    videoSection.classList.toggle("hidden-empty", !editMode && videos.length === 0);
  }
  if (evidenceRoot) {
    const hasAny = list.length > 0;
    evidenceRoot.classList.toggle("hidden-empty-root", !editMode && !hasAny);
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function normalizeUrl(raw) {
  const text = String(raw || "").trim();
  if (!text) return "";
  if (/^https?:\/\//i.test(text)) return text;
  return `https://${text}`;
}

function addLink(zone, card) {
  if (!mediaStore[zone]) mediaStore[zone] = [];
  const rawUrl = card?.querySelector("[data-link-url]")?.value || "";
  const href = normalizeUrl(rawUrl);
  if (!href) {
    markZoneSaved(zone, "链接为空，未添加");
    return;
  }
  const title = card?.querySelector("[data-link-title]")?.value?.trim() || href;
  mediaStore[zone].push({ type: "link", name: title, src: href, persistable: true });
  const urlInput = card?.querySelector("[data-link-url]");
  const titleInput = card?.querySelector("[data-link-title]");
  if (urlInput) urlInput.value = "";
  if (titleInput) titleInput.value = "";
  saveMediaStore();
  renderGallery(zone);
  markZoneSaved(zone, "已自动保存");
}

async function appendFiles(zone, files, type) {
  if (!mediaStore[zone]) mediaStore[zone] = [];
  const list = Array.from(files || []);
  for (const file of list) {
    if (type === "video") {
      mediaStore[zone].push({ type, name: file.name, src: URL.createObjectURL(file), persistable: false });
      continue;
    }

    if (file.size <= MAX_PERSIST_IMAGE_BYTES) {
      const src = await fileToDataUrl(file);
      mediaStore[zone].push({ type, name: file.name, src, persistable: true });
    } else {
      mediaStore[zone].push({ type, name: file.name, src: URL.createObjectURL(file), persistable: false });
    }
  }
  saveMediaStore();
  renderGallery(zone);
  markZoneSaved(zone, "已自动保存");
}

function clearZone(zone) {
  const list = mediaStore[zone] || [];
  list.forEach((item) => {
    if (item && typeof item.src === "string" && item.src.startsWith("blob:")) {
      URL.revokeObjectURL(item.src);
    }
  });
  mediaStore[zone] = [];
  saveMediaStore();
  renderGallery(zone);
  markZoneSaved(zone, "已保存（空）");
}

function removeItem(zone, idx) {
  const list = mediaStore[zone] || [];
  const removed = list.splice(idx, 1)[0];
  if (removed && typeof removed.src === "string" && removed.src.startsWith("blob:")) {
    URL.revokeObjectURL(removed.src);
  }
  saveMediaStore();
  renderGallery(zone);
  markZoneSaved(zone, "已自动保存");
}

function getLightboxApi() {
  const lightbox = document.getElementById("lightbox");
  const body = document.getElementById("lightbox-body");
  let zoom = 1;

  function applyZoom(value) {
    const img = body?.querySelector(".lightbox-media");
    const meter = body?.querySelector("[data-zoom-value]");
    if (!img) return;
    zoom = Math.max(0.6, Math.min(4, value));
    img.style.transform = `scale(${zoom})`;
    if (meter) meter.textContent = `${Math.round(zoom * 100)}%`;
  }

  function open(type, src) {
    if (!lightbox || !body) return;
    if (type === "video") {
      body.innerHTML = `<div class="lightbox-scroll"><video controls autoplay src="${src}"></video></div>`;
    } else {
      body.innerHTML = `
        <div class="lightbox-tools">
          <button type="button" class="zoom-btn" data-zoom-action="out">-</button>
          <button type="button" class="zoom-btn" data-zoom-action="in">+</button>
          <button type="button" class="zoom-btn" data-zoom-action="reset">100%</button>
          <span class="zoom-meter" data-zoom-value>100%</span>
        </div>
        <div class="lightbox-scroll">
          <img class="lightbox-media" src="${src}" alt="放大" />
        </div>
      `;
      applyZoom(1);
    }
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function openHtml(html) {
    if (!lightbox || !body) return;
    body.innerHTML = `<div class="lightbox-scroll lightbox-text">${html}</div>`;
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function close() {
    if (!lightbox || !body) return;
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    body.innerHTML = "";
  }

  return { open, openHtml, close, lightbox };
}

function emphasizeText(text) {
  const keys = [
    "分层外呼提醒",
    "中英双语课堂资源",
    "定级测试埋点",
    "线上 workshop",
    "2-3 类课堂精彩瞬间",
    "沉默型学员",
    "开口次数提升",
    "10-20 分钟",
    "核心指标",
    "阈值"
  ];

  let out = text;
  keys.forEach((k) => {
    out = out.replaceAll(k, `<span class="key-focus">${k}</span>`);
  });
  return out;
}

function toLeanDept(cfg) {
  const list = Array.isArray(cfg.items) ? cfg.items.filter(Boolean) : [];
  const duty = cfg.duty || list[0] || "职责待补充。";
  const actions = (cfg.actions && Array.isArray(cfg.actions) ? cfg.actions : list.slice(1)).slice(0, 2);
  const redline = cfg.redline || cfg.threshold || "红线待定义";
  return { duty, actions, redline };
}

function departmentWidget(zone, groups) {
  const entries = Object.entries(groups);
  const tabs = entries
    .map(([name], i) => `<button class="dept-tab ${i === 0 ? "active" : ""}" data-action="dept-switch" data-zone="${zone}" data-dept="${name}">${name}</button>`)
    .join("");

  const panels = entries
    .map(
      ([name, cfg], i) => {
        const lean = toLeanDept(cfg);
        return `
      <div class="dept-panel ${i === 0 ? "active" : ""}" data-panel="${name}" data-zone="${zone}">
        <p class="meta-line"><span class="pill-priority ${cfg.priority.toLowerCase()}">${cfg.priority}</span><span>负责人：${cfg.owner}</span></p>
        <p class="duty-line"><strong>职责：</strong>${emphasizeText(lean.duty)}</p>
        <p class="meta-line"><span>时间：${cfg.due}</span><span class="redline">红线：${lean.redline}</span></p>
        <p class="action-title">动作（2条）</p>
        <ul>${(lean.actions.length ? lean.actions : ["动作待补充。"]).map((x) => `<li>${emphasizeText(x)}</li>`).join("")}</ul>
      </div>
    `;
      }
    )
    .join("");

  return `<div class="dept-widget" data-dept-zone="${zone}"><div class="dept-tabs">${tabs}</div><div class="dept-panels">${panels}</div></div>`;
}

function dimensionMapWidget(zone, dims) {
  const cards = (dims || [])
    .map(
      (item, idx) => `
      <article class="dim-card">
        <h5>${item.name}</h5>
        <p>${emphasizeText(item.focus)}</p>
        <p class="dim-kpi"><strong>核心指标：</strong>${item.kpi}</p>
        <p class="dim-kpi"><strong>链路口径：</strong>${item.measure}</p>
        ${evidenceUploader(`${zone}-dim-${idx}`, `${item.name}证据位`)}
      </article>
    `
    )
    .join("");

  return `<div class="dim-map">${cards}</div>`;
}

function focusBlocksWidget(blocks) {
  if (!blocks || !blocks.length) return "";
  return `
    <div class="focus-blocks">
      ${blocks
        .map(
          (block, idx) => `
        <article class="focus-block">
          <h5>${block.title}</h5>
          <p class="focus-summary">${block.summary || ""}</p>
          <button type="button" class="focus-open-btn" data-action="focus-open" data-focus-idx="${idx}">点开整卡放大查看</button>
        </article>
      `
        )
        .join("")}
    </div>
  `;
}

function threeLineWidget(cfg) {
  if (!cfg) return "";
  return `
    <div class="phase-three-line">
      <h5>课中三行模板</h5>
      <p><strong>${cfg.problem || ""}</strong></p>
      <p>${cfg.action || ""}</p>
      <p><span class="three-line-kpi">${cfg.metric || ""}</span></p>
    </div>
  `;
}

function p0TopWidget(items) {
  if (!items || !items.length) return "";
  return `
    <section class="p0-top-widget">
      <h5>阶段推进：3 条 P0</h5>
      <div class="p0-top-grid">
        ${items
          .slice(0, 3)
          .map(
            (x, idx) => `
          <article class="p0-top-item">
            <p class="p0-index">P0-${idx + 1}｜${x.owner}</p>
            <p class="p0-action">${emphasizeText(x.action)}</p>
            <p class="p0-kpi">${x.kpi}</p>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

function phaseExecutionWidget(zone, groups) {
  if (!groups || !Object.keys(groups).length) return "";
  return `
    <section class="phase-execution-widget">
      <h5>阶段推进：分部门可交互查看</h5>
      <p class="phase-execution-note">点击部门查看该阶段的职责、时间红线与关键动作；汇报时可逐部门展开。</p>
      ${departmentWidget(zone, groups)}
    </section>
  `;
}

function focusBlockPopup(block) {
  if (!block) return "";
  return `
    <article class="focus-pop-card">
      <h3>${block.title}</h3>
      <p class="focus-pop-summary">${block.summary || ""}</p>
      <div class="focus-pop-grid">
        ${(block.groups || [])
          .map(
            (g) => `
          <section class="focus-pop-group">
            <h4>${g.name}</h4>
            <ul>${(g.items || []).map((x) => `<li>${emphasizeText(x)}</li>`).join("")}</ul>
          </section>
        `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderPhase(key) {
  const data = phaseData[key];
  if (!data) return;
  activePhaseKey = key;
  const panel = document.getElementById("phase-panel");

  panel.innerHTML = `
    <div class="phase-header">
      <span class="phase-tag">${data.tag}</span>
      <h3>${data.title}</h3>
    </div>
    <div class="phase-grid">
      <article class="phase-card">
        <h4>竞品做法</h4>
        <ul>${data.competitor.map((x) => `<li>${emphasizeText(x)}</li>`).join("")}</ul>
        ${evidenceUploader(`${key}-comp`, "竞品证据位")}
      </article>
      <article class="phase-card">
        <h4>LingoACE 现状</h4>
        <ul>${data.current.map((x) => `<li>${emphasizeText(x)}</li>`).join("")}</ul>
        ${threeLineWidget(data.threeLine)}
        ${key === "after" ? postClassBoardWidget(data.conversionBoard) : ""}
        ${focusBlocksWidget(data.focusBlocks)}
        ${evidenceUploader(`${key}-current`, "现状证据位")}
      </article>
      <article class="phase-card">
        <h4>落地动作 + 四维对应指标</h4>
        <p class="phase-summary">主责任人：${data.summary.owner} ｜ 截止：${data.summary.due} ｜ 本阶段目标：${data.summary.focus}</p>
        ${dimensionMapWidget(`${key}`, data.dimensionMap)}
        ${phaseExecutionWidget(`${key}-actions`, data.actions)}
      </article>
    </div>
  `;

  renderGallery(`${key}-comp`);
  renderGallery(`${key}-current`);
  (data.dimensionMap || []).forEach((_, idx) => renderGallery(`${key}-dim-${idx}`));
}

function postClassBoardWidget(cfg) {
  if (!cfg) return "";
  return `
    <section class="post-board">
      <h5>${cfg.title}</h5>
      <div class="post-board-fields">${(cfg.fields || []).map((x) => `<span>${x}</span>`).join("")}</div>
      <p class="post-board-note">${cfg.pollyRef || ""}</p>
      <button class="parent-strong-btn" type="button">${cfg.cta || "家长建议一键反馈"}</button>
    </section>
  `;
}

function chipClassByTone(tone) {
  if (tone === "high") return "chip-high";
  if (tone === "mid") return "chip-mid";
  return "chip-low";
}

function riskClass(risk) {
  if (risk === "高") return "high";
  if (risk === "中") return "mid";
  return "low";
}

function renderCompareMatrix() {
  const wrap = document.getElementById("compare-grid");
  if (!wrap) return;

  const headCols = compareMatrix.columns.map((x) => `<div class="matrix-head">${x}</div>`).join("");
  const rowsHtml = compareMatrix.rows
    .map((row) => {
      const cells = row.cells
        .map((cell) => {
          if (!cell) return '<div class="matrix-cell empty">—</div>';
          const active = cell.key === activeCompareKey ? "active" : "";
          return `
            <button class="matrix-cell ${active}" type="button" data-action="matrix-open" data-key="${cell.key}">
              <span class="value-chip ${chipClassByTone(cell.tone)}">${cell.value}</span>
            </button>
          `;
        })
        .join("");

      return `
        <div class="matrix-row-label">${row.name}</div>
        ${cells}
      `;
    })
    .join("");

  wrap.innerHTML = `
    <div class="matrix-title">课程类型 × 老师类型</div>
    <div class="matrix-grid">
      <div class="matrix-head row-label">课程类型</div>
      ${headCols}
      ${rowsHtml}
    </div>
    <p class="matrix-note">提示：红色为当前风险点，黄色为需验证，绿色为相对优势。点击每个数据点看原因。</p>
  `;

  renderRiskDetail(activeCompareKey);
}

function renderTodoPanel() {
  const panel = document.getElementById("todo-panel");
  if (!panel) return;
  panel.innerHTML = followupTodo
    .map(
      (x, idx) => `
      <article class="todo-item">
        <h4>${idx + 1}. ${x.title}</h4>
        <p class="todo-meta"><span>Owner：${x.owner}</span><span>截止：${x.due}</span><span class="todo-status">状态：${x.status}</span></p>
        <p>${x.detail}</p>
      </article>
    `
    )
    .join("");
}

function renderBenchmarkPrice() {
  const wrap = document.getElementById("benchmark-price-content");
  if (!wrap) return;

  const cards = benchmarkPriceData
    .map(
      (item) => `
      <article class="benchmark-card">
        <h3>${item.brand}</h3>
        <p class="bp-line"><span>国内转化</span><strong>${item.conversion}</strong></p>
        <p class="bp-line"><span>价格带</span><strong>${item.price}</strong></p>
        <p class="bp-punchline"><strong>Punchline：</strong>${item.punchline}</p>
      </article>
    `
    )
    .join("");

  const systems = systemPunchlines.map((x) => `<li>${x}</li>`).join("");
  const evidence = benchmarkEvidence.map((x) => evidenceUploader(x.zone, x.label)).join("");

  wrap.innerHTML = `
    <div class="benchmark-grid">${cards}</div>
    <article class="system-punchline">
      <h3>体系差异核心结论</h3>
      <ul>${systems}</ul>
    </article>
    <article class="system-punchline">
      <h3>竞品素材接口（点击上传，按钮预览）</h3>
      <div class="benchmark-evidence-grid">${evidence}</div>
    </article>
  `;

  benchmarkEvidence.forEach((x) => renderGallery(x.zone));
}

function renderRiskDetail(key) {
  const target = document.getElementById("risk-detail");
  const item = compareDetails[key];
  if (!target || !item) return;

  target.innerHTML = `
    <h3>${item.title}</h3>
    <p class="risk-main">${item.result}</p>
    <span class="risk-pill ${riskClass(item.risk)}">${item.tag}</span>
    <p><strong>原因判断：</strong>${item.reason}</p>
    <p><strong>管理结论：</strong>${item.decision}</p>
    ${evidenceUploader(`risk-${key}`, "风险证据位")}
  `;

  renderGallery(`risk-${key}`);
}

function applyMode() {
  document.body.classList.toggle("edit-mode", editMode);
  const btn = document.getElementById("mode-toggle");
  if (btn) {
    btn.textContent = editMode ? "切换到演示模式" : "切换到编辑模式";
    btn.setAttribute("aria-pressed", editMode ? "true" : "false");
  }

  document.querySelectorAll("[data-media-zone]").forEach((node) => {
    const zone = node.dataset.mediaZone;
    if (zone) renderGallery(zone);
  });
}

function setupTabs() {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((x) => {
        x.classList.remove("active");
        x.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderPhase(tab.dataset.phase);
      applyMode();
    });
  });
}

function setupInteraction() {
  const { open, openHtml, close, lightbox } = getLightboxApi();
  const closeBtn = document.getElementById("lightbox-close");
  const modeBtn = document.getElementById("mode-toggle");
  const navFab = document.getElementById("nav-fab");
  const navDrawer = document.getElementById("nav-drawer");
  const navClose = document.getElementById("nav-close");
  const todoFab = document.getElementById("todo-fab");
  const todoDrawer = document.getElementById("todo-drawer");
  const todoClose = document.getElementById("todo-close");
  const navItems = Array.from(document.querySelectorAll(".nav-item[data-nav-target]"));

  const drag = {
    active: false,
    moved: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startLeft: 0,
    startTop: 0
  };

  function clampFab(left, top) {
    if (!navFab) return { left, top };
    const rect = navFab.getBoundingClientRect();
    const maxLeft = window.innerWidth - rect.width - 8;
    const maxTop = window.innerHeight - rect.height - 8;
    return {
      left: Math.max(8, Math.min(maxLeft, left)),
      top: Math.max(8, Math.min(maxTop, top))
    };
  }

  function moveFab(left, top) {
    if (!navFab) return;
    const pos = clampFab(left, top);
    navFab.style.left = `${pos.left}px`;
    navFab.style.top = `${pos.top}px`;
  }

  function markActiveNav(targetId, phaseKey) {
    navItems.forEach((item) => {
      const sameTarget = item.dataset.navTarget === targetId;
      const samePhase = (item.dataset.phaseTarget || "") === (phaseKey || "");
      const active = sameTarget && ((item.dataset.phaseTarget && samePhase) || !item.dataset.phaseTarget);
      item.classList.toggle("active", active);
    });
  }

  function placeDrawerNearFab() {
    if (!navFab || !navDrawer) return;
    const fabRect = navFab.getBoundingClientRect();
    const drawerRect = navDrawer.getBoundingClientRect();
    const width = drawerRect.width || Math.min(300, window.innerWidth * 0.9);
    const height = drawerRect.height || Math.min(window.innerHeight - 128, 600);
    const left = Math.max(8, Math.min(window.innerWidth - width - 8, fabRect.left));
    let top = fabRect.bottom + 10;
    if (top + height > window.innerHeight - 8) {
      top = Math.max(8, fabRect.top - height - 10);
    }
    navDrawer.style.left = `${left}px`;
    navDrawer.style.top = `${top}px`;
  }

  function setNav(open) {
    if (!navFab || !navDrawer) return;
    navDrawer.classList.toggle("show", open);
    navDrawer.setAttribute("aria-hidden", open ? "false" : "true");
    navFab.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) placeDrawerNearFab();
  }

  function setTodo(open) {
    if (!todoFab || !todoDrawer) return;
    todoDrawer.classList.toggle("show", open);
    todoDrawer.setAttribute("aria-hidden", open ? "false" : "true");
    todoFab.setAttribute("aria-expanded", open ? "true" : "false");
  }

  closeBtn?.addEventListener("click", close);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  modeBtn?.addEventListener("click", () => {
    editMode = !editMode;
    applyMode();
  });

  navFab?.addEventListener("pointerdown", (e) => {
    if (!navFab) return;
    drag.active = true;
    drag.moved = false;
    drag.pointerId = e.pointerId;
    drag.startX = e.clientX;
    drag.startY = e.clientY;
    const rect = navFab.getBoundingClientRect();
    drag.startLeft = rect.left;
    drag.startTop = rect.top;
    navFab.classList.add("dragging");
    navFab.setPointerCapture(e.pointerId);
  });

  navFab?.addEventListener("pointermove", (e) => {
    if (!drag.active || drag.pointerId !== e.pointerId) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
    if (drag.moved) {
      moveFab(drag.startLeft + dx, drag.startTop + dy);
      setNav(false);
    }
  });

  navFab?.addEventListener("pointerup", (e) => {
    if (!drag.active || drag.pointerId !== e.pointerId || !navFab) return;
    navFab.classList.remove("dragging");
    navFab.releasePointerCapture(e.pointerId);
    const wasDrag = drag.moved;
    drag.active = false;
    drag.pointerId = null;
    if (!wasDrag) {
      const willOpen = !navDrawer?.classList.contains("show");
      setNav(Boolean(willOpen));
    }
  });

  navFab?.addEventListener("pointercancel", () => {
    drag.active = false;
    drag.pointerId = null;
    navFab.classList.remove("dragging");
  });

  navClose?.addEventListener("click", () => setNav(false));

  todoFab?.addEventListener("click", () => {
    const willOpen = !todoDrawer?.classList.contains("show");
    setTodo(Boolean(willOpen));
  });

  todoClose?.addEventListener("click", () => setTodo(false));

  document.addEventListener("click", (e) => {
    if (navDrawer?.classList.contains("show") && !e.target.closest("#nav-drawer") && !e.target.closest("#nav-fab")) {
      setNav(false);
    }
    if (todoDrawer?.classList.contains("show") && !e.target.closest("#todo-drawer") && !e.target.closest("#todo-fab")) {
      setTodo(false);
    }

    const zoomBtn = e.target.closest("[data-zoom-action]");
    if (zoomBtn) {
      const media = document.querySelector(".lightbox-media");
      if (!media) return;
      const currentScale = Number((media.style.transform.match(/scale\(([^)]+)\)/) || ["", "1"])[1]) || 1;
      const action = zoomBtn.dataset.zoomAction;
      if (action === "in") {
        media.style.transform = `scale(${Math.min(4, currentScale + 0.25)})`;
      }
      if (action === "out") {
        media.style.transform = `scale(${Math.max(0.6, currentScale - 0.25)})`;
      }
      if (action === "reset") {
        media.style.transform = "scale(1)";
      }
      const meter = document.querySelector("[data-zoom-value]");
      if (meter) {
        const nowScale = Number((media.style.transform.match(/scale\(([^)]+)\)/) || ["", "1"])[1]) || 1;
        meter.textContent = `${Math.round(nowScale * 100)}%`;
      }
      return;
    }

    const btn = e.target.closest("[data-action]");

    if (btn && btn.dataset.action === "matrix-open") {
      activeCompareKey = btn.dataset.key;
      renderCompareMatrix();
      applyMode();
      return;
    }

    if (btn && btn.classList.contains("nav-item")) {
      const targetId = btn.dataset.navTarget;
      const phaseKey = btn.dataset.phaseTarget;
      if (phaseKey) {
        const phaseTab = document.querySelector(`.tab[data-phase='${phaseKey}']`);
        phaseTab?.click();
      }
      if (targetId) {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      markActiveNav(targetId, phaseKey);
      setNav(false);
      return;
    }

    if (btn && btn.dataset.action === "dept-switch") {
      const zone = btn.dataset.zone;
      const dept = btn.dataset.dept;
      const root = document.querySelector(`[data-dept-zone='${zone}']`);
      if (!root || !dept) return;
      root.querySelectorAll(".dept-tab").forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      root.querySelectorAll(".dept-panel").forEach((x) => x.classList.remove("active"));
      root.querySelector(`[data-panel='${dept}']`)?.classList.add("active");
      return;
    }

    if (btn && btn.dataset.action === "focus-open") {
      const idx = Number(btn.dataset.focusIdx);
      const block = phaseData[activePhaseKey]?.focusBlocks?.[idx];
      if (block) openHtml(focusBlockPopup(block));
      return;
    }

    if (btn) {
      const card = btn.closest("[data-media-zone]");
      const zone = card?.dataset.mediaZone;
      if (btn.dataset.action === "preview-item") {
        const item = mediaStore[btn.dataset.zone]?.[Number(btn.dataset.idx)];
        if (item) open(item.type, item.src);
        return;
      }

      if (!zone) return;
      if (btn.dataset.action === "pick-image") card.querySelector("input[data-kind='image']")?.click();
      if (btn.dataset.action === "pick-video") card.querySelector("input[data-kind='video']")?.click();
      if (btn.dataset.action === "add-link") addLink(zone, card);
      if (btn.dataset.action === "save-zone") {
        saveMediaStore();
        markZoneSaved(zone, "已保存");
      }
      if (btn.dataset.action === "clear-zone") clearZone(zone);
      if (btn.dataset.action === "remove-item") removeItem(zone, Number(btn.dataset.idx));
      return;
    }

    const thumb = e.target.closest(".media-thumb");
    if (!thumb) return;
    const mediaItem = thumb.closest(".media-item");
    const zone = mediaItem?.dataset.zone;
    const idx = Number(mediaItem?.dataset.idx);
    const item = mediaStore[zone]?.[idx];
    if (item) open(item.type, item.src);
  });

  document.addEventListener("change", (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (!input.matches(".hidden-input[data-kind]")) return;
    const card = input.closest("[data-media-zone]");
    const zone = card?.dataset.mediaZone;
    const kind = input.dataset.kind;
    if (!zone || !kind) return;
    appendFiles(zone, input.files, kind);
    input.value = "";
  });

  window.addEventListener("resize", () => {
    if (!navFab) return;
    const rect = navFab.getBoundingClientRect();
    moveFab(rect.left, rect.top);
    if (navDrawer?.classList.contains("show")) placeDrawerNearFab();
  });
}

loadMediaStore();
renderCompareMatrix();
renderTodoPanel();
renderBenchmarkPrice();
renderPhase("before");
setupTabs();
setupInteraction();
applyMode();
