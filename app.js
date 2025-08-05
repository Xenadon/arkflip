
class MaskGame {
    constructor() {

        this.preset_themes = {
            "boss": ["boss/大鲍勃",
                "boss/萨卡兹百夫长",
                "boss/“皇帝的利刃”",
                "boss/斗士塔露拉",
                "boss/特雷西斯",
                "boss/特蕾西娅，“魔王”",
                "boss/“庞贝”",
                "boss/碎骨",
                "boss/弑君者(敌方)",
                "boss/塔露拉",
                "boss/W(敌方)",
                "boss/霜星",
                "boss/梅菲斯特",
                "boss/浮士德",
                "boss/“鼠王”",
                "boss/霜星，“冬痕”",
                "boss/爱国者",
                "boss/泥岩(敌方)",
                "boss/“巨大的丑东西”",
                "boss/腐败骑士",
                "boss/凋零骑士",
                "boss/梅菲斯特，“歌者”",
                "boss/“不死的黑蛇”",
                "boss/杰斯顿·威廉姆斯",
                "boss/“自在”",
                "boss/“进化的本质”",
                "boss/“皇帝的利刃”，追猎者",
                "boss/盐风主教昆图斯",
                "boss/潘乔·萨拉斯",
                "boss/蔓德拉",
                "boss/血骑士狄开俄波利斯",
                "boss/锏(敌方)",
                "boss/岁相",
                "boss/“殉道者”，安多恩",
                "boss/曼弗雷德",
                "boss/屠谕者，大群意志",
                "boss/白垩，“尘世遗骸”",
                "boss/“唤醒”",
                "boss/“物欲拮抗者”",
                "boss/“最后的蒸汽骑士”",
                "boss/扎罗，“狼之主”",
                "boss/“领袖”",
                "boss/“睚”",
                "boss/“复仇者”",
                "boss/爱布拉娜",
                "boss/“变形者集群”",
                "boss/克丽斯腾",
                "boss/“花匠”",
                "boss/多利，“羊之主”",
                "boss/“桥夹”克里夫",
                "boss/杜卡雷，“君主之红”",
                "boss/赫尔昏佐伦，“巫王”",
                "boss/哈洛德·克雷加文",
                "boss/“祟”",
                "boss/马特奥上尉",
                "boss/“阿米娅”",
                "boss/引火的死魂灵",
                "boss/特蕾西娅",
                "boss/玛利图斯，“海嗣”",
                "boss/“三头犬”",
                "boss/祖巴伊达姆，从往昔来",
                "boss/阿利斯泰尔，帝国余晖",
                "boss/“狂欢之主”",
                "boss/安纳斯塔西奥，赎罪者",
                "boss/无餍",
                "boss/“万火归一”",
                "boss/PRTS，“源代码”",
                "boss/“圣徒”",
                "boss/“酒神”",
                "boss/迷路的巨像",
                "boss/喷气人",
                "boss/“遗弃者”",
                "boss/锈锤战士",
                "boss/“寒灾”",
                "boss/“墓碑”",
                "boss/漂泊颂偶",
                "boss/“雪牝”",
                "boss/“霜牡”",
                "boss/卢西恩，“猩红血钻”",
                "boss/伤心的大锁",
                "boss/“剧团喉舌”",
                "boss/“剧作家”",
                "boss/圣徒卡门",
                "boss/接潮主教",
                "boss/接潮蔑死体",
                "boss/塑路者",
                "boss/延命塑路者",
                "boss/“偏执泡影”",
                "boss/最后的骑士",
                "boss/伊莎玛拉，腐化之心",
                "boss/伊祖米克，生态泉源",
                "boss/坎诺特",
                "boss/“邪魔的利刃”",
                "boss/陷落雪祀",
                "boss/纠缠藤蔓",
                "boss/“萨米的意志”",
                "boss/“木裂”埃克提尔尼尔",
                "boss/无垠回荡克雷松",
                "boss/哈兰杜汗，大地之鞭",
                "boss/路加萨尔古斯，历法之王",
                "boss/菈玛莲",
                "boss/歌利亚",
                "boss/凯尔希(敌方)",
                "boss/Mon2tr",
                "boss/弗莱蒙特，诸思之解答",
                "boss/特雷西斯，黑冠尊主",
                "boss/博卓卡斯替，圣卫铳骑",
                "boss/奎隆，摩诃萨埵权化",
                "boss/“阿米娅”，炉芯终曲",
                "boss/夕娥",
                "boss/玉双剑",
                "boss/枣大刀",
                "boss/炭长矛",
                "boss/师祖",
                "boss/易",
                "boss/“岁”",
                "boss/“望”"
            ],
            "sidestory": ['ss/骑兵与猎人',
                          'ss/火蓝之心',
                          'ss/喧闹法则',
                          'ss/生于黑夜',
                          'ss/沃伦姆德的薄暮',
                          'ss/密林悍将归来',
                          'ss/玛莉娅·临光',
                          'ss/孤岛风云',
                          'ss/画中人',
                          'ss/遗尘漫步',
                          'ss/覆潮之下',
                          'ss/多索雷斯假日',
                          'ss/长夜临光',
                          'ss/风雪过境',
                          'ss/将进酒',
                          'ss/吾导先路',
                          'ss/愚人号',
                          'ss/尘影余音',
                          'ss/绿野幻梦',
                          'ss/理想城长夏狂欢季',
                          'ss/叙拉古人',
                          'ss/照我以火',
                          'ss/登临意',
                          'ss/孤星',
                          'ss/空想花庭',
                          'ss/火山旅梦',
                          'ss/不义之财',
                          'ss/崔林特尔梅之金',
                          'ss/银心湖列车',
                          'ss/怀黍离',
                          'ss/巴别塔',
                          'ss/生路',
                          'ss/太阳甩在身后',
                          'ss/追迹日落以西',
                          'ss/揭幕者们',
                          'ss/出苍白海',
                          'ss/相见欢',
                          'ss/挽歌燃烧殆尽',
                          'ss/众生行记',
                          'ss/红丝绒',
                          'ss/墟'
                        ],
            "投钱": [
                'ss/不义之财', 'ss/众生行即', 'copper/大炎通宝', 'copper/一字落', 'copper/金寒水衍', '新约能天使', 
                '蕾缪安', '信仰搅拌机', 'Mon3tr', '死芒', '隐德来希', '余'],
            "开服干员": [
                "暴行",
                "银灰",
                "塞雷娅",
                "星熊",
                "夜莺",
                "闪灵",
                "安洁莉娜",
                "艾雅法拉",
                "伊芙利特",
                "推进之王",
                "能天使",
                "食铁兽",
                "狮蝎",
                "空",
                "真理",
                "初雪",
                "崖心",
                "守林人",
                "普罗旺斯",
                "火神",
                "可颂",
                "雷蛇",
                "红",
                "临光",
                "华法琳",
                "赫默",
                "梅尔",
                "天火",
                "阿米娅",
                "陨星",
                "白金",
                "蓝毒",
                "幽灵鲨",
                "拉普兰德",
                "因陀罗",
                "芙兰卡",
                "德克萨斯",
                "凛冬",
                "白面鸮",
                "阿消",
                "地灵",
                "深海色",
                "古米",
                "蛇屠箱",
                "角峰",
                "调香师",
                "嘉维尔",
                "末药",
                "暗索",
                "砾",
                "慕斯",
                "艾丝黛尔",
                "霜叶",
                "缠丸",
                "杜宾",
                "红豆",
                "清道夫",
                "讯使",
                "白雪",
                "流星",
                "杰西卡",
                "远山",
                "夜烟",
                "梓兰",
                "史都华德",
                "安赛尔",
                "芙蓉",
                "炎熔",
                "安德切尔",
                "克洛丝",
                "米格鲁",
                "卡缇",
                "玫兰莎",
                "翎羽",
                "香草",
                "芬",
                "12F",
                "杜林",
                "巡林者",
                "黑角",
                "夜刀",
                "Castle-3",
                "Lancet-2",
            ],
            "所有干员": [
                "斩业星熊",
"遥",
"吉星",
"松桐",
"电弧",
"司霆惊蛰",
"录武官",
"酒神",
"蒂比",
"Miss.Christine",
"新约能天使",
"蕾缪安",
"信仰搅拌机",
"聆音",
"CONFESS-47",
"Mon3tr",
"阿兰娜",
"骋风",
"死芒",
"钼铅",
"水灯心",
"隐德来希",
"诺威尔",
"余",
"烛煌",
"寻澜",
"行箸",
"引星棘刺",
"特克诺",
"瑰盐",
"荒芜拉普兰德",
"忍冬",
"弑君者",
"裁度",
"菲莱",
"云迹",
"维娜·维多利亚",
"波卜",
"凯瑟琳",
"玛露西尔",
"莱欧斯",
"齐尔查克",
"森西",
"佩佩",
"娜仁图亚",
"衡沙",
"莎草",
"锡人",
"妮芙",
"渡桥",
"乌尔比安",
"海霓",
"深巡",
"阿米娅(医疗)",
"维什戴尔",
"逻各斯",
"魔王",
"历阵锐枪芬",
"PhonoR-0",
"阿斯卡纶",
"阿罗玛",
"奥达",
"露托",
"艾拉",
"医生",
"双月",
"导火索",
"红隼",
"黍",
"左乐",
"小满",
"万顷",
"莱伊",
"温米",
"锏",
"烈夏",
"哈洛德",
"塑心",
"薇薇安娜",
"止颂",
"深律",
"折光",
"跃跃",
"赫德雷",
"刺玫",
"戴菲恩",
"维荻",
"涤火杰西卡",
"杏仁",
"冰酿",
"纯烬艾雅法拉",
"琳琅诗怀雅",
"青枳",
"苍苔",
"凛视",
"提丰",
"寒檀",
"圣约送葬人",
"空构",
"隐现",
"Friston-3",
"缪尔赛思",
"霍尔海雅",
"淬羽赫默",
"玫拉",
"伊内丝",
"洋灰",
"摩根",
"休谟斯",
"U-Official",
"麒麟R夜刀",
"火龙S黑角",
"泰拉大陆调查团",
"仇白",
"铎铃",
"重岳",
"林",
"火哨",
"截云",
"焰影苇草",
"和弦",
"谜图",
"缄默德克萨斯",
"斥罪",
"伺夜",
"子月",
"雪绒",
"石英",
"白铁",
"明椒",
"达格达",
"铅踝",
"海沫",
"罗小黑",
"玛恩纳",
"但书",
"百炼嘉维尔",
"鸿雪",
"晓歌",
"至简",
"多萝西",
"承曦格雷伊",
"星源",
"黑键",
"濯尘芙蓉",
"车尔尼",
"埃拉托",
"归溟幽灵鲨",
"艾丽妮",
"流明",
"掠风",
"号角",
"洛洛",
"海蒂",
"褐果",
"菲亚梅塔",
"风丸",
"见行者",
"澄闪",
"夏栎",
"令",
"老鲤",
"夜半",
"寒芒克洛丝",
"九色鹿",
"暮落",
"灵知",
"极光",
"耶拉",
"耀骑士临光",
"焰尾",
"蚀清",
"野鬃",
"蜜莓",
"布丁",
"正义骑士号",
"远牙",
"灰毫",
"琴柳",
"桑葚",
"罗比菈塔",
"假日威龙陈",
"水月",
"羽毛笔",
"龙舌兰",
"帕拉斯",
"卡涅利安",
"绮良",
"贝娜",
"深靛",
"浊心斯卡蒂",
"凯尔希",
"歌蕾蒂娅",
"赤冬",
"异客",
"熔泉",
"暴雨",
"灰烬",
"霜华",
"闪击",
"战车",
"夕",
"嵯峨",
"乌有",
"炎狱炎熔",
"图耶",
"空弦",
"爱丽丝",
"豆苗",
"山",
"卡夫卡",
"罗宾",
"松果",
"阿米娅(近卫)",
"迷迭香",
"泥岩",
"絮雨",
"杰克",
"瑕光",
"奥斯塔",
"鞭刃",
"泡泡",
"史尔特尔",
"四月",
"薄绿",
"芳汀",
"森蚺",
"燧石",
"特米米",
"酸糖",
"棘刺",
"安哲拉",
"孑",
"贾维",
"蜜蜡",
"稀音",
"铃兰",
"断崖",
"亚叶",
"卡达",
"早露",
"莱恩哈特",
"苦艾",
"波登可",
"月禾",
"石棉",
"W",
"温蒂",
"极境",
"THRM-EX",
"傀影",
"巫恋",
"铸铁",
"刻刀",
"断罪者",
"风笛",
"慑砂",
"柏喙",
"宴",
"清流",
"刻俄柏",
"惊蛰",
"年",
"阿",
"吽",
"雪雉",
"煌",
"灰喉",
"安比尔",
"布洛卡",
"苇草",
"莫斯提马",
"槐琥",
"拜松",
"梅",
"微风",
"伊桑",
"麦哲伦",
"送葬人",
"炎客",
"红云",
"坚雷",
"赫拉格",
"星极",
"桃金娘",
"黑",
"格劳克斯",
"锡兰",
"苏苏洛",
"陈",
"诗怀雅",
"格雷伊",
"斑点",
"泡普卡",
"斯卡蒂",
"格拉尼",
"夜魔",
"猎蜂",
"月见夜",
"空爆",
"暴行",
"银灰",
"塞雷娅",
"星熊",
"夜莺",
"闪灵",
"安洁莉娜",
"艾雅法拉",
"伊芙利特",
"推进之王",
"能天使",
"食铁兽",
"狮蝎",
"空",
"真理",
"初雪",
"崖心",
"守林人",
"普罗旺斯",
"火神",
"可颂",
"雷蛇",
"红",
"临光",
"华法琳",
"赫默",
"梅尔",
"天火",
"阿米娅",
"陨星",
"白金",
"蓝毒",
"幽灵鲨",
"拉普兰德",
"因陀罗",
"芙兰卡",
"德克萨斯",
"凛冬",
"白面鸮",
"阿消",
"地灵",
"深海色",
"古米",
"蛇屠箱",
"角峰",
"调香师",
"嘉维尔",
"末药",
"暗索",
"砾",
"慕斯",
"艾丝黛尔",
"霜叶",
"缠丸",
"杜宾",
"红豆",
"清道夫",
"讯使",
"白雪",
"流星",
"杰西卡",
"远山",
"夜烟",
"梓兰",
"史都华德",
"安赛尔",
"芙蓉",
"炎熔",
"安德切尔",
"克洛丝",
"米格鲁",
"卡缇",
"玫兰莎",
"翎羽",
"香草",
"芬",
"12F",
"杜林",
"巡林者",
"黑角",
"夜刀",
"Castle-3",
"Lancet-2",
            ],
            "最新六星": [
                '斩业星熊', '遥', '电弧', '司霆惊蛰', '酒神', '新约能天使', 
                '蕾缪安', '信仰搅拌机', 'Mon3tr', '死芒', '隐德来希', '余',
                '烛煌', '引星棘刺', '荒芜拉普兰德', '忍冬', '弑君者', '维娜·维多利亚',
                '玛露西尔', '佩佩', '娜仁图亚', '妮芙', '乌尔比安', '维什戴尔',
                '逻各斯', '魔王', '阿斯卡纶', '艾拉', '黍', '左乐'],

            "C":[
                "缪尔赛思", "银灰", "荒芜拉普兰德", "维什戴尔",
                "刻俄柏", "逻各斯", "水月", "左乐",
                "圣约送葬人", "黑键", "酒神", "陈",
                "遥", "新约能天使", "能天使", "伊内丝",
                "流明", "伺夜", "仇白", "斥罪",
                "余", "引星棘刺", "斯卡蒂", "泥岩",
                "Mon3tr", "老鲤", "提丰", "铃兰",
                "异客", "司霆惊蛰", "乌尔比安", "白铁"
            ],
            "B":[
                "推进之王", "号角", "菲亚梅塔", "林",
                "伊芙利特", "艾拉", "娜仁图亚", "帕拉斯",
                "卡涅利安", "麦哲伦", "焰尾", "霍尔海雅",
                "涤火杰西卡", "温蒂", "信仰搅拌机", "阿",
                "止颂", "山", "傀影", "齐尔查克",
                "龙舌兰", "乌有", "柏喙", "万顷",
                "见行者", "可颂", "送葬人", "慑砂",
                "炎客", "闪灵", "凯尔希", "流明",
                "白面鸮"
            ],
            "A":[
                "录武官", "瑰盐", "哈洛德", "吉星",
                "苇草", "濯尘芙蓉", "Miss.Christine", "微风",
                "寻澜", "弑君者", "齐尔查克", "锡人",
                "深巡", "温米", "青枳", "休谟斯",
                "洋灰", "截云", "铅踝", "海沫",
                "罗小黑", "承曦格雷伊", "埃拉托", "寒芒克洛丝",
                "羽毛笔", "卡夫卡", "灰烬", "松果",
                "莱恩哈特", "惊蛰"
            ],
            "S":[
                "普罗旺斯", "格拉尼", "真理", "梅尔",
                "诗怀雅", "凛冬", "锡兰", "火神",
                "格劳克斯", "槐琥", "拜松", "夜魔",
                "布洛卡", "断崖", "亚叶", "因陀罗",
                "特米米", "燧石", "安哲拉", "奥斯塔",
                "罗宾", "贾维", "闪击", "熔泉",
                "蚀清", "野鬃", "九色鹿", "夜半",
                "洛洛", "掠风"
            ]
        };

        this.preset_hint_themes = {
            default: [
                '是否在2023年以前实装',
                '该干员档案中种族是否为三个字',
                '该干员是否可能在自己的基础攻击范围之外造成伤害',
                '该干员是否实装了两个以上模组',
                '该干员是否能造成物理伤害',
                '该干员是否能造成法术伤害',
                '该干员是否由两套及以上的皮肤',
                '该干员在精二、满潜能的情况下部署费用是偶数',
                '该干员曾经进入过黄票商店',
                '该干员满练状态下的基建技能包括提高贸易',
                '该干员是否不能通过与抽卡资源挂钩的方式获取',
                '该干员本人除了密录外是否在其它剧情登场',

            ],
            custom: [
                '自定义提示示例1',
                '自定义提示示例2',
                '自定义提示示例3'
            ]
        };


        this.gridN = 5;
        this.gridM = 6;
        this.alpha = 0.7;
        this.squareStates = [];
        this.currentImages = [];
        this.themes = this.loadThemes();
        console.log(this.themes)
        
        this.currentTheme = '最新六星';
        
        // 提示相关
        this.hintThemes = this.loadHintThemes();
        this.currentHintTheme = 'default';
        this.selectedHints = []; // 选中的提示范围
        
        this.init();
    }

    loadThemes() {
        const savedThemes = localStorage.getItem('maskGameThemes');
        if (savedThemes) {
            return JSON.parse(savedThemes);
        }
        return this.preset_themes
    }

    saveThemes() {
        localStorage.setItem('maskGameThemes', JSON.stringify(this.themes));
    }

    loadHintThemes() {
        const savedHints = localStorage.getItem('maskGameHints');
        if (savedHints) {
            return JSON.parse(savedHints);
        }
        return this.preset_hint_themes
    }

    saveHintThemes() {
        localStorage.setItem('maskGameHints', JSON.stringify(this.hintThemes));
    }

    init() {
        // 将实例保存到全局变量
        window.maskGame = this;
        this.setupEventListeners();
        this.initializeGrid();
        this.renderGrid();
        this.populateThemeSelects();
    }

    populateThemeSelects() {
        // 填充主题下拉框
        const themeSelect = document.getElementById('themeSelect');
        const themeOptions = Array.from(themeSelect.children);
        
        // 保留"添加主题..."选项
        const addOption = themeOptions.find(opt => opt.value === 'add-theme');
        themeSelect.innerHTML = '';
        
        // 添加所有主题
        Object.keys(this.themes).forEach(themeName => {
            const option = document.createElement('option');
            option.value = themeName;
            option.textContent = themeName;
            themeSelect.appendChild(option);
        });
        
        // 设置当前选中的主题
        if (this.currentTheme && this.themes[this.currentTheme]) {
            themeSelect.value = this.currentTheme;
        }
        
        if (addOption) {
            themeSelect.appendChild(addOption);
        }
        
        // 填充提示主题下拉框
        const hintSelect = document.getElementById('hintThemeSelect');
        const hintOptions = Array.from(hintSelect.children);
        const addHintOption = hintOptions.find(opt => opt.value === 'add-hint-theme');
        hintSelect.innerHTML = '';
        
        // 添加所有提示主题
        Object.keys(this.hintThemes).forEach(themeName => {
            const option = document.createElement('option');
            option.value = themeName;
            option.textContent = themeName;
            hintSelect.appendChild(option);
        });
        
        if (addHintOption) {
            hintSelect.appendChild(addHintOption);
        }
    }

    setupEventListeners() {
        // 控制按钮
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('refreshBtn').addEventListener('click', () => this.refresh());
        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettings());

        // 主题选择
        document.getElementById('themeSelect').addEventListener('change', (e) => {
            if (e.target.value === 'add-theme') {
                this.showAddTheme();
                e.target.value = this.currentTheme;
            } else {
                this.currentTheme = e.target.value;
                this.refresh();
            }
        });


        // 设置面板
        document.getElementById('settingsCancel').addEventListener('click', () => this.hideSettings());
        document.getElementById('settingsSave').addEventListener('click', () => this.saveSettings());
        
        // 添加主题面板
        document.getElementById('themeCancel').addEventListener('click', () => this.hideAddTheme());
        document.getElementById('themeSave').addEventListener('click', () => this.saveTheme());

        // 提示功能
        document.getElementById('drawHintBtn').addEventListener('click', () => this.drawHint());
        document.getElementById('hintThemeSelect').addEventListener('change', (e) => {
            if (e.target.value === 'add-hint-theme') {
                this.showAddHint();
                e.target.value = this.currentHintTheme;
            } else {
                this.currentHintTheme = e.target.value;
                this.updateHintCheckboxes();
            }
        });


        // 添加提示主题面板
        document.getElementById('hintCancel').addEventListener('click', () => this.hideAddHint());
        document.getElementById('hintSave').addEventListener('click', () => this.saveHint());

        // 透明度滑块
        const alphaRange = document.getElementById('alphaRange');
        const alphaValue = document.getElementById('alphaValue');
        alphaRange.addEventListener('input', (e) => {
            alphaValue.textContent = e.target.value;
        });


        // 点击模态框外部关闭
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    initializeGrid() {
        this.squareStates = Array(this.gridN * this.gridM).fill(true);
        this.selectRandomImages();
    }

    selectRandomImages() {
        const themeImages = this.themes[this.currentTheme] || [];
        const needed = this.gridN * this.gridM;
        
        if (themeImages.length >= needed) {
            const shuffled = [...themeImages].sort(() => Math.random() - 0.5);
            this.currentImages = shuffled.slice(0, needed);
        } else {
            // 图片不足，循环使用已有图片
            this.currentImages = [];
            for (let i = 0; i < needed; i++) {
                this.currentImages.push(themeImages[i % themeImages.length]);
            }
        }
    }

    renderGrid() {
        const grid = document.getElementById('grid');
        grid.style.gridTemplateColumns = `repeat(${this.gridM}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${this.gridN}, 1fr)`;
        
        // 让网格自适应填充满game-board
        // 计算grid容器的最佳尺寸以填充game-board
        const gameBoard = document.querySelector('.game-board');
        const boardRect = gameBoard.getBoundingClientRect();
        const gapSize = 8; // 网格间距
        const padding = 40; // 容器内边距
        
        // 使用合理的默认尺寸，确保网格可见
        const maxWidth = Math.max(boardRect.width - padding, 300);
        const maxHeight = Math.max(boardRect.height - padding, 400);
        
        // 计算每个单元格大小，取适配空间的最小值
        const cellWidth = (maxWidth - (this.gridM - 1) * gapSize) / this.gridM;
        const cellHeight = (maxHeight - (this.gridN - 1) * gapSize) / this.gridN;
        const cellSize = Math.max(Math.min(cellWidth, cellHeight), 50); // 最小50px确保可见
        
        // 计算最终网格尺寸
        const gridWidth = cellSize * this.gridM + (this.gridM - 1) * gapSize;
        const gridHeight = cellSize * this.gridN + (this.gridN - 1) * gapSize;
        
        grid.innerHTML = '';
        grid.style.height = `${gridHeight}px`;
        grid.style.width = `${gridWidth}px`;
        grid.style.maxWidth = '100%';
        grid.style.margin = '0 auto';

        for (let i = 0; i < this.squareStates.length; i++) {
            const square = document.createElement('div');
            square.className = `square ${this.squareStates[i] ? '' : 'hidden'}`;
            
            // 创建图片元素
            const img = document.createElement('img');
            img.src = this.generateImageUrl(this.currentImages[i]);
            img.alt = `图片 ${this.currentImages[i]}`;
            img.onerror = () => {
                // 图片加载失败时生成彩色占位符
                img.src = this.generatePlaceholderImage(this.currentImages[i]);
            };
            
            // 创建遮罩层
            const mask = document.createElement('div');
            mask.className = 'mask';
            mask.style.background = `rgba(0, 0, 0, ${this.alpha})`;
            
            square.appendChild(img);
            square.appendChild(mask);
            
            // 点击事件
            square.addEventListener('click', () => this.toggleSquare(i));
            
            grid.appendChild(square);
        }
    }

    generateImageUrl(imageId) {
        return `imgs/${imageId}.png`;
    }

    generatePlaceholderImage(imageId) {
        // 生成彩色占位符
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
            '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
            '#FD79A8', '#FDCB6E', '#6C5CE7', '#A29BFE', '#74B9FF'
        ];
        const color = colors[imageId % colors.length];
        
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        
        // 绘制渐变背景
        const gradient = ctx.createLinearGradient(0, 0, 200, 200);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, this.adjustBrightness(color, -30));
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 200, 200);
        
        // 绘制数字
        ctx.fillStyle = 'white';
        ctx.font = 'bold 72px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        ctx.fillText(imageId, 100, 100);
        
        return canvas.toDataURL();
    }

    adjustBrightness(hex, percent) {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    toggleSquare(index) {
        this.squareStates[index] = !this.squareStates[index];
        this.renderGrid();
    }

    reset() {
        this.squareStates = Array(this.gridN * this.gridM).fill(true);
        this.renderGrid();
    }

    refresh() {
        this.selectRandomImages();
        this.renderGrid();
    }

    showSettings() {
        document.getElementById('gridN').value = this.gridN;
        document.getElementById('gridM').value = this.gridM;
        document.getElementById('alphaRange').value = this.alpha;
        document.getElementById('alphaValue').textContent = this.alpha;
        document.getElementById('settingsPanel').style.display = 'flex';
    }

    hideSettings() {
        document.getElementById('settingsPanel').style.display = 'none';
    }

    saveSettings() {
        const newN = parseInt(document.getElementById('gridN').value);
        const newM = parseInt(document.getElementById('gridM').value);
        const newAlpha = parseFloat(document.getElementById('alphaRange').value);

        if (newN >= 1 && newN <= 10 && newM >= 1 && newM <= 10) {
            this.gridN = newN;
            this.gridM = newM;
            this.alpha = newAlpha;
            
            this.hideSettings();
            this.initializeGrid();
            this.renderGrid();
        }
    }

    showAddTheme() {
        document.getElementById('themeName').value = '';
        document.getElementById('themeIds').value = '';
        document.getElementById('addThemePanel').style.display = 'flex';
    }

    hideAddTheme() {
        document.getElementById('addThemePanel').style.display = 'none';
    }

    saveTheme() {
        const name = document.getElementById('themeName').value.trim();
        const idsText = document.getElementById('themeIds').value.trim();
        
        if (name && idsText) {
            const ids = idsText.split('\n').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
            if (ids.length > 0) {
                this.themes[name] = ids;
                this.saveThemes();
                this.updateThemeSelect();
                this.hideAddTheme();
            }
        }
    }

    updateThemeSelect() {
        const select = document.getElementById('themeSelect');
        const currentOptions = Array.from(select.children);
        
        // 保留"添加主题..."选项
        const addOption = currentOptions.find(opt => opt.value === 'add-theme');
        select.innerHTML = '';
        
        // 添加所有主题
        Object.keys(this.themes).forEach(themeName => {
            const option = document.createElement('option');
            option.value = themeName;
            option.textContent = themeName;
            select.appendChild(option);
        });
        
        // 设置当前选中的主题
        if (this.currentTheme && this.themes[this.currentTheme]) {
            select.value = this.currentTheme;
        }
        
        if (addOption) {
            select.appendChild(addOption);
        }
    }

    
    // 更新提示复选框
    updateHintCheckboxes() {
        const checkboxContainer = document.getElementById('hintCheckboxes');
        const currentHints = this.hintThemes[this.currentHintTheme] || [];
        
        // 清空现有复选框
        checkboxContainer.innerHTML = '';
        
        if (currentHints.length === 0) {
            checkboxContainer.innerHTML = '<p>该主题暂无提示内容</p>';
            return;
        }
        
        // 创建复选框
        currentHints.forEach((hint, index) => {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'hint-checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `hint-${index}`;
            checkbox.checked = true; // 默认全选
            checkbox.value = hint;
            checkbox.addEventListener('change', () => this.updateSelectedHints());
            
            const label = document.createElement('label');
            label.htmlFor = `hint-${index}`;
            label.textContent = hint;
            
            checkboxItem.appendChild(checkbox);
            checkboxItem.appendChild(label);
            checkboxContainer.appendChild(checkboxItem);
        });
        
        // 初始化选中的提示
        this.updateSelectedHints();
    }

    // 更新选中的提示
    updateSelectedHints() {
        const checkboxes = document.querySelectorAll('#hintCheckboxes input[type="checkbox"]:checked');
        this.selectedHints = Array.from(checkboxes).map(cb => cb.value);
    }

    // 修改后的提示方法
    drawHint() {
        if (this.selectedHints.length === 0) {
            const displayElement = document.getElementById('hintDisplay');
            displayElement.innerHTML = '<p>请先选择至少一个提示范围（复选框）</p>';
            return;
        }

        const displayElement = document.getElementById('hintDisplay');
        displayElement.classList.add('rolling');
        
        let rollCount = 0;
        const maxRolls = 20;
        const rollInterval = 50;
        
        // 滚动动画
        const rollingInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * this.selectedHints.length);
            displayElement.innerHTML = `<p>${this.selectedHints[randomIndex]}</p>`;
            rollCount++;
            
            if (rollCount >= maxRolls) {
                clearInterval(rollingInterval);
                displayElement.classList.remove('rolling');
                
                // 最终显示抽取的提示
                const finalIndex = Math.floor(Math.random() * this.selectedHints.length);
                const finalHint = this.selectedHints[finalIndex];
                displayElement.innerHTML = `<p>${finalHint}</p>`;
            }
        }, rollInterval);
    }

    showAddHint() {
        document.getElementById('hintThemeName').value = '';
        document.getElementById('hintContents').value = '';
        document.getElementById('addHintPanel').style.display = 'flex';
    }

    hideAddHint() {
        document.getElementById('addHintPanel').style.display = 'none';
    }

    saveHint() {
        const name = document.getElementById('hintThemeName').value.trim();
        const contentsText = document.getElementById('hintContents').value.trim();
        
        if (name && contentsText) {
            const hints = contentsText.split('\n').map(hint => hint.trim()).filter(hint => hint.length > 0);
            if (hints.length > 0) {
                this.hintThemes[name] = hints;
                this.saveHintThemes();
                this.updateHintThemeSelect();
                this.hideAddHint();
            }
        }
    }

    updateHintThemeSelect() {
        const select = document.getElementById('hintThemeSelect');
        const currentOptions = Array.from(select.children);
        
        // 保留"添加提示主题..."选项
        const addOption = currentOptions.find(opt => opt.value === 'add-hint-theme');
        select.innerHTML = '';
        
        // 添加所有提示主题
        Object.keys(this.hintThemes).forEach(themeName => {
            const option = document.createElement('option');
            option.value = themeName;
            option.textContent = themeName;
            select.appendChild(option);
        });
        
        // 设置当前选中的主题
        if (this.currentHintTheme && this.hintThemes[this.currentHintTheme]) {
            select.value = this.currentHintTheme;
        }
        
        if (addOption) {
            select.appendChild(addOption);
        }
    }
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    const game = new MaskGame();
    game.updateHintThemeSelect();
    game.updateHintCheckboxes(); // 初始化复选框
});

// 窗口大小改变时重新渲染
window.addEventListener('resize', () => {
    // 由于无法从外部访问game实例，使用全局变量
    if (window.maskGame) {
        window.maskGame.renderGrid();
    }
});
