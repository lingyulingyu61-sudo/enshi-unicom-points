// ===== 常量 =====
var catMap={'云计算':'cat-cloud','大数据':'cat-bigdata','大安全':'cat-security','物联网':'cat-iot'};
var catFullMap={'云计算':'云计算','大数据':'大数据','大安全':'大安全','物联网':'物联网'};
function catLabel(c){return catFullMap[c]||c||'其他';}
function catCls(c){return catMap[c]||'';}
// 毛利率取值分档 → 徽章样式
var marginMap={
  '≥20%':'margin-high',
  '20%>X≥10%':'margin-mid',
  'X<10%':'margin-low',
  '按物联网连接规则':'margin-iot',
  '根据专网项目上会评审通过的毛利率自行填写':'margin-custom'
};
// 徽章显示用的短文案（完整口径放在 title 里）
var marginShortMap={'根据专网项目上会评审通过的毛利率自行填写':'上会评审毛利率','按物联网连接规则':'按物联网连接规则'};
function marginLabel(p){
  var base=marginShortMap[p.margin_range]||p.margin_range||'-';
  if(p.margin_value!==null&&p.margin_value!==undefined&&p.margin_value!=='')base+=' · X≈'+p.margin_value+'%';
  return base;
}
function marginTitle(p){
  var t=p.margin_range||'';
  if(p.margin_value!==null&&p.margin_value!==undefined&&p.margin_value!=='')t+='（实际毛利率约 '+p.margin_value+'%）';
  return t;
}
function productBlock(p){return p.block||'-';}
var activeCategory='all';
var sortCol='';
var sortDir='asc';

// ===== 拼音首字母映射 =====
var pinyinMap={a:'阿啊呵嗄锕',ai:'爱埃艾碍癌哀挨矮隘蔼唉皑嗳嫒瑷暧砨锿',an:'安案按岸暗鞍氨俺胺铵谙庵黯鹌',ang:'昂肮盎',ao:'奥凹傲澳袄熬敖懊拗坳嗷岙廒獒鏖鳌鳌',ba:'把八吧巴拔霸罢爸芭靶疤捌笆粑茇菝魃',bai:'白百摆败拜柏佰掰稗',ban:'办半板班般版搬伴扮颁斑扳绊阪坂钣瘢癍',bang:'帮邦榜膀旁绑棒磅傍谤梆镑',bao:'保包报暴宝抱薄爆堡饱鲍孢苞葆褓趵鸨',bei:'被北倍备背杯辈悲卑碑沸贝狈惫孛邶蓓呗焙碚鹎',ben:'本笨奔苯夯畚坌',beng:'崩绷甭泵蹦迸堋',bi:'比必笔闭避彼币毕鼻碧辟壁弊逼彼匕鄙毙彼泌荜荸芘吡哔筚篦秕裎舭铋毖狴',bian:'便变边编辨辩鞭遍贬匾卞苄弁忭汴缏鳊',biao:'表标彪婊骠飚镳瘭裱',bie:'别瘪憋鳖',bin:'宾滨斌彬濒殡膑髌槟',bing:'并病兵冰丙秉柄炳禀',bo:'波博播勃拨泊薄伯驳博卜铂箔舶渤鹁钹',bu:'不部步布补捕卜哺堡簿',ca:'擦',cai:'才采菜财材踩裁彩蔡猜',can:'参残餐惨灿仓蚕惭掺',cang:'仓藏苍沧舱',cao:'草操曹槽糙嘈漕',ce:'策测侧厕册',ceng:'层蹭曾',cha:'查察叉差茶插刹茬岔诧碴嚓槎楂锸',chai:'拆柴差豺侪虿',chan:'产缠禅铲颤搀掺蝉馋谗潺婵骣觇',chang:'长场常厂唱畅尝偿肠昌倡猖闾娼菖苌徜惝鬯',chao:'超抄朝吵潮巢炒钞绰嘲晁',che:'车彻撤尺扯澈掣砗',chen:'称陈沉晨臣尘辰衬趁忱沈宸谌碜',cheng:'成程城承称乘诚惩澄秤橙逞骋埕枨柽塍',chi:'吃迟池持迟尺齿翅耻痴匙弛驰侈炽叱斥饬墀篪豉褫蚩嗤',chong:'充冲虫崇宠重涌种憧艟',chou:'抽愁丑酬仇筹臭绸畴稠瞅瘳雠',chu:'出处除初楚触厨储础搐橱矗蹰褚亍黜',chuai:'揣搋啜',chuan:'穿传船喘串川椽氚钏',chuang:'创床窗闯疮幢',chui:'吹垂锤炊捶陲槌',chun:'春纯唇蠢淳醇莼',chuo:'戳辍绰龊',ci:'此次词刺辞慈磁瓷雌差茨祠茈鹚',cong:'从聪匆葱囱琮淙骢',cou:'凑辏腠',cu:'粗促醋簇蹙蹴',cuan:'窜蹿篡蹿',cui:'催摧崔翠脆萃淬粹璀榱',cun:'存村寸蹲',cuo:'措错搓挫撮蹉锉',da:'大打达搭答瘩嗒哒耷鞑',dai:'代带待戴袋逮怠贷大单呆棣岱傣绐玳黛',dan:'单但蛋担弹淡丹胆旦诞氮郸耽掸惮诞',dang:'当党档挡荡档凼菪',dao:'到道倒岛导刀悼盗稻祷蹈叨焘氘',de:'的得德的地锝',dei:'得',deng:'等登灯邓凳瞪蹬噔磴',di:'的地第低底弟堤滴迪敌帝递抵笛蒂缔谛翟嫡氐诋砥坻诋柢棣觌',dian:'电点店典颠垫殿淀惦奠殿癫滇碘踮',diao:'掉调钓雕吊鸟刁叼铞铫',die:'跌叠蝶叠谍碟迭爹谍堞垤揲',ding:'定顶丁订钉锭叮仃铤腚碇',diu:'丢铥',dong:'东动洞冬懂栋董侗恫冻氡',dou:'都斗豆兜抖陡逗篼蚪',du:'读度独督毒都渡堵赌杜肚镀睹犊妒笃嘟',duan:'段断短端缎锻椴煅',dui:'对队堆兑怼憝',dun:'顿吨墩盾蹲钝盹遁礅砘',duo:'多夺朵躲剁舵堕哆踱垛',e:'饿恶额恩鹅俄蛾娥鳄噩厄呃扼锷谔垩萼苊',en:'恩蒽',er:'二而耳尔饵儿贰迩珥',fa:'发法罚乏伐筏阀垡珐',fan:'反范犯繁烦饭翻凡帆返泛番矾梵藩蕃钒',fang:'方放房防访妨纺仿芳坊肪邡舫',fei:'非费飞肥废匪肺沸啡斐翡扉蜚芾狻',fen:'分份纷奋粉氛芬坟焚愤粪汾酚吩',feng:'风封峰丰逢锋蜂疯缝凤奉讽烽俸酆葑',fo:'佛',fou:'否缶',fu:'付服福府父复负富副腐浮符附夫腹辅抚覆俯肤孵敷拂俘抚氟袱斧孚莩驸跗凫麸',ga:'噶嘎噶尕',gai:'该改概盖溉钙丐尬赅垓',gan:'干感敢杆赶肝甘秆赣乾柑尴杆擀矸',gang:'刚岗钢港杠缸罡戆',gao:'高告稿搞膏糕羔睾缟槁篙镐',ge:'个各歌革格哥阁隔割搁鸽戈葛蛤骼颌饹袼',gei:'给',gen:'根跟根哏',geng:'更耕梗耿颈庚羹埂绠',gong:'工公共供功红贡宫巩龚弓躬汞珙',gou:'够构购狗勾沟钩钩苟垢枸彀缿觏',gu:'古故顾骨估鼓固股谷雇孤姑辜枯箍沽菇咕皋诂菰罟鸪蛄',gua:'挂瓜寡刮褂卦诖剐',guai:'怪拐乖',guan:'关管观馆官灌贯冠惯棺罐灌矜纶倌莞掼涠',guang:'光广逛犷桄',gui:'规贵归鬼桂柜硅瑰轨龟圭妫氿炅庋簋',gun:'滚棍衮磙绲',guo:'国过果郭锅裹帼涡椁虢聒蜮',ha:'哈蛤',hai:'还孩海害骇嗨胲',han:'含汉韩寒旱函喊涵罕翰憾邯悍捍瀚寒',hang:'航行列行夯杭绗珩',hao:'好号毫豪耗浩郝嚎濠壕藁嗥',he:'和合河何贺核喝荷赫盒鹤呵诃菏壑嗬阖',hei:'黑嘿嗨',hen:'很恨痕狠很',heng:'横衡恒哼蘅珩桁',hong:'红洪烘虹鸿宏弘哄泓蕻黉讧',hou:'后候厚侯喉猴吼堠篌瘊',hu:'护互湖呼户核糊虎弧胡壶忽瑚乎葫琥轷唬怙戽',hua:'化话花华画划滑哗豁骅桦猾铧',huai:'坏怀淮槐徊踝',huan:'还环换欢患缓幻焕桓唤涣浣豢奂郇圜',huang:'黄荒皇慌煌簧凰惶蝗磺湟潢喤遑隍',hui:'会回灰汇挥辉徽恢诙晖彗慧惠晦贿悔卉秽烩茴喙缋咴',hun:'混婚魂昏浑荤馄诨',huo:'活火货获或祸惑霍豁藿嚯锪攉',ji:'机其及级几即给季计记技济击集积基极己寄奇继籍辑鸡姬绩激肌饥迹嫉寂忌讦芨叽怿剞戟屐麂犄笈蒺跻玑觊髻',jia:'家加架价假甲嘉佳夹雅嫁挟颊枷戛颊迦珈痂荚镓岬',jian:'见建间件检健减简艰监坚剑践渐键荐尖碱剪捡歼鉴兼肩艰煎竖俭柬茧碱硷拣笺溅锏鞯',jiang:'将江讲奖强匠桨蒋酱僵姜讲奖匠桨港茳袶缰礓耩',jiao:'叫教交较脚角焦胶搅骄娇嚼轿侥狡绞缴侥蕉茭艽鹪蛟鲛',jie:'接结阶节街介届解结劫戒洁截杰捷睫竭姊皆桔诫芥疥睫喈嗟讦婕拮栝羯',jin:'进金近紧今禁仅尽劲晋谨筋巾津襟仅瑾馑榺衿',jing:'经精京景竞静境警敬镜惊竞晶茎荆兢旌粳阱刭婧獍',jiong:'窘迥炯',jiu:'就久九旧酒救纠舅咎韭厩鸠鹫疚赳阄柏揪',ju:'据局举具句聚巨剧距拒俱惧矩驹菊咀沮咀枸椐榉遽琚狙趄掬踽遽',juan:'卷捐眷倦绢圈鹃涓镌隽',jue:'决绝角觉爵掘诀厥倔攫劂谝蕨崛撅',jun:'军均君峻俊菌钧骏竣浚隽郡',ka:'卡咖喀咯咔佧',kai:'开凯慨揩铠揩锎',kan:'看刊勘堪坎侃槛槛阚龛',kang:'抗扛康慷亢糠闶',kao:'考靠烤拷铐犒栲',ke:'可课克客科颗刻渴壳柯棵咳磕苛蝌蚪珂轲氪骒缂',ken:'肯啃恳垦龈裉',keng:'坑铿吭',kong:'空控孔恐倥箜',kou:'口扣寇抠佝蔻',ku:'苦库哭酷裤枯窟挎骷堀',kua:'跨夸垮挎胯侉',kuai:'快块筷会蒯哙狯',kuan:'宽款髋',kuang:'况矿狂框筐旷眶匡卝圹夼',kui:'溃馈愧葵魁盔窥奎逵馗喹夔',kun:'困昆捆坤琨锟髡',kuo:'扩括阔廓',la:'拉啦辣蜡腊落垃喇辣剌瘌',lai:'来赖莱崃徕籁',lan:'兰蓝烂栏懒拦篮阑澜婪岚褴斓镧',lang:'浪郎廊狼朗榔螂琅',lao:'老劳牢捞涝烙姥佬唠崂栳铑铹',le:'了乐勒肋仂叻泐',lei:'类雷累垒泪擂蕾磊羸诔',leng:'冷愣棱',li:'里理力立利例历礼李离丽厉励厘隶梨犁璃黎篱狸漓锂痢荔雳俐砾蛎詈罹蓠藜黧',lia:'俩',lian:'连联练链廉莲恋帘怜涟镰敛脸蔹奁裢濂',liang:'两量亮凉粮梁辆良谅晾踉椁椋',liao:'了料疗聊辽僚缭燎寥潦嘹镣',lie:'列烈劣裂猎咧咧冽烈洌捩裂',lin:'林临邻磷淋麟霖鳞伶吝蔺嶙啉辚膦',ling:'领令灵零龄岭陵玲铃凌棱伶羚苓聆翎菱瓴囹',liu:'六留刘流柳硫溜馏瘤榴浏鎏骅',long:'龙隆笼拢聋弄陇胧垄珑胧栊癃',lou:'楼搂篓漏陋娄镂偻瘘蝼髅',lu:'路鲁陆录露炉六鹿卢芦虏庐麓撸泸禄渌绿逯璐辂辘氇胪簏',lv:'律绿旅率虑滤氯履屡吕铝侣脊缕褛',luan:'乱卵滦銮',lue:'略掠',lun:'论轮伦仑沦纶',luo:'落罗洛骆螺锣萝箩骡裸络捋荦泺漯椤锘',ma:'吗妈马嘛麻骂码蚂摩玛杩犸',mai:'买卖麦脉埋迈励霾荬',man:'满慢蛮漫埋瞒蔓鳗馒螨幔谩',mang:'忙茫盲芒芒硭',mao:'毛冒贸茂帽猫矛髦锚卯袤蟊媦瑁瞀',me:'么么',mei:'没美每妹梅媒煤霉眉梅玫枚莓嵋猸湄',men:'们门闷扪焖',meng:'梦猛蒙盟孟萌朦懵蟒虻黾礞',mi:'米密秘迷弥蜜糜谜麋縻弭糜眯谧咪咪咪袮',mian:'面棉免眠绵勉缅冕娩渑腼',miao:'苗秒描妙渺淼缈邈鹋',mie:'灭蔑咩蠛',min:'民敏闽悯皿抿泯苠珉',ming:'明名命鸣铭冥茗溟酩瞑',miu:'谬',mo:'末莫磨模没抹摸冒陌漠墨魔沫摩寞蓦瘼貊镆糢',mou:'某谋牟缪眸哞',mu:'母模亩木目幕慕姆牧穆拇牡沐霖坶苜钼',na:'那拿哪纳钠呐南捺',nai:'乃奶耐奈氖萘鼐',nan:'南男难楠喃',nang:'囊馕囔',nao:'闹脑恼挠瑙呶猱脑',ne:'呢讷',nei:'内那',nen:'嫩嫩',neng:'能',ni:'你泥尼拟逆溺倪匿腻霓旎猊坭',nian:'年念粘碾捻辗廿鲇鲶',niang:'娘酿',niao:'鸟尿溺脲',nie:'捏聂涅啮镊镍孽乜陧蘖',nin:'您',ning:'宁凝拧泞柠佞聍',niu:'牛纽扭钮拗忸妞',nong:'农弄浓侬哝',nou:'耨',nu:'努怒奴孥驽',nuan:'暖',nue:'虐疟',nuo:'挪诺糯懦傩搦',o:'哦噢',ou:'欧偶鸥藕呕耦沤',pa:'怕爬趴扒帕琶杷筢',pai:'排牌派拍徘哌',pan:'盘判叛盼攀潘蹒磐爿蟠泮',pang:'旁胖庞磅彷彷螃',pao:'跑炮泡刨袍咆狍庖匏',pei:'配培陪赔佩裴沛胚霈辔帔',pen:'喷盆湓',peng:'碰朋棚蓬鹏彭澎膨篷捧怦蟛',pi:'批皮啤劈疲毗坯披辟骗否屁琵枇譬丕霹吡噼庀淠',pian:'片篇偏骗遍犏胼翩',piao:'票飘漂剽嫖瓢殍瞟',pie:'撇瞥撇',pin:'品拼贫频聘嫔拚榀',ping:'平评瓶苹萍屏凭乒枰坪鲆',po:'破颇泼婆迫坡泊颇繁叵鄱珀钋',pou:'剖裒',pu:'普谱铺浦菩朴葡扑瀑铺溥莆濮璞',qi:'其起期气七妻汽棋齐奇骑欺旗祈弃契砌戚祁歧歧崎脐齐圻芪荠祈荠颀骐绮',qia:'卡恰掐髂',qian:'前千钱浅签潜欠谦迁牵谴歉倩嵌钳虔谴钎掮芡茜掮缱',qiang:'强抢墙腔枪呛羌抢戕戗嫱樯镪锖',qiao:'桥瞧巧悄敲侨乔翘壳撬跷鞒硗劁',qie:'切且窃茄怯惬妾锲箧',qin:'亲钦秦勤琴芹禽侵寝沁芩揿嗪矜溱芩',qing:'情清青请轻晴庆倾顷氢擎卿罄磬苘綮檠黥',qiong:'穷琼穹邛茕筇跫',qiu:'求球秋丘酋囚泗龟蚯湫楸逑巯',qu:'去取曲区趣驱屈躯渠趋 qu 龋觑朐祛磲鸲癯蛐蕖',quan:'全权劝圈券泉拳犬铨诠痊荃醛绺辁畎',que:'确却缺雀鹊阙炔瘸',qun:'群裙逡',ran:'然燃染冉苒髯',rang:'让嚷壤攘瓤',rao:'饶绕扰饶荛',re:'热惹若喏',ren:'人任认忍仁刃韧纫妊壬饪轫',reng:'仍扔',ri:'日',rong:'容荣融溶蓉熔戎榕绒茸冗嵘狨',rou:'肉柔揉糅鞣',ru:'如入乳辱儒濡褥蠕嚅孺濡',ruan:'软阮朊',rui:'锐瑞蕊睿芮蕊枘',run:'润闰',ruo:'若弱偌',sa:'洒撒萨仨卅脎',sai:'赛塞赛噻',san:'三散伞叁馓霰',sang:'桑嗓丧颡搡',sao:'扫骚嫂搔缫臊埽',se:'色塞涩瑟啬铯',sen:'森',seng:'僧',sha:'杀沙傻刹纱啥煞杉莎痧鲨裟霎',shai:'筛晒',shan:'山善闪扇陕单擅珊删膳汕缮赡膻讪掸钐埏芟跚',shang:'上商伤尚赏裳殇觞垧',shao:'少烧绍稍勺哨梢烧芍苕劭艄',she:'设社射涉舍蛇摄赦慑奢赊麝',shei:'谁',shen:'身深神什审申慎沈伸甚渗肾绅莘呻婶娠砷椹',sheng:'生声胜剩省城圣盛牲绳笙甥嵊晟',shi:'是时事十使失师示石食史世市识始士誓逝势适释实试氏诗拾湿蚀狮尸驶施侍恃噬虱耆谥鲺',shou:'手受收寿瘦售首守狩授绶艏',shu:'书树术数属输述熟束暑鼠署蜀薯殊梳舒竖枢叔束熟戍墅姝菽殳摅沭澍',shua:'刷耍唰',shuai:'率衰甩帅甩蟀',shuan:'拴栓拴涮',shuang:'双爽霜孀',shui:'水谁睡税说',shun:'顺瞬舜',shuo:'说硕烁朔勺灼妁槊',si:'四思私死似寺司撕斯丝饲嗣俟肆嘶巳祀厶咝osph',song:'送松宋颂讼诵嵩淞怂忪凇',sou:'搜艘擞嗖嗽溲馊蝼',su:'速素苏诉宿俗缩肃酥粟夙谡簌觫',suan:'算酸蒜狻',sui:'岁随碎虽穗髓遂绥隋邃祟睢',sun:'孙损荪狲飧',suo:'所锁缩索梭唆琐嗍蓑娑羧挲',ta:'他她它塌塔踏榻獭嗒挞蹋漯',tai:'太台态泰抬胎汰钛苔跆邰骀',tan:'谈弹探坦摊贪谭潭炭瘫袒叹昙坍忐钽锬',tang:'堂糖躺汤唐塘烫膛趟倘淌镗傥螳',tao:'套逃讨陶涛掏桃萄淘滔饕弢绦',te:'特忒忑',teng:'疼腾藤誊',ti:'提体题替踢梯蹄剔涕锑醍绨鹈缇',tian:'天田填甜添田腆忝殄阗',tiao:'条调跳挑跳佻眺祧粜',tie:'铁贴帖萜',ting:'听停庭厅挺亭庭廷艇婷霆莛葶梃',tong:'同通痛铜桶筒童统瞳侗咚潼恸酮砼',tou:'头投透偷',tu:'图突土涂吐途屠兔秃凸荼菟钍',tuan:'团湍抟畽',tui:'推退腿蜕颓褪忒',tun:'吞屯囤臀氽',tuo:'拖脱托妥拓椭驼唾陀坨鸵驮酡跅',wa:'娃挖瓦蛙洼袜哇娲瓦腽',wai:'外歪崴',wan:'完万晚弯湾玩顽宛婉腕挽烷丸莞菀绾琬',wang:'往王望忘网亡旺汪枉妄惘辋魍',wei:'为位未维谓喂伟委卫围违威危慰微伪尾魏蔚胃畏蜗尉唯帷苇痿蔚猥渭偎诿炜玮',wen:'问文温稳吻闻蚊纹瘟紊刎阌汶',weng:'翁嗡瓮蓊蕹',wo:'我握窝沃卧蜗倭渥幄硪',wu:'五无物务误武舞午污屋亡无吴吾悟梧五巫侮芜捂鹜乌戊毋诬牾忤焐芴鼯',xi:'系希西息稀喜锡吸溪悉膝夕惜昔戏析洗烯嘻嬉袭夕汐熄烯奚蹊菥畦粞觋',xia:'下夏吓狭虾峡暇瞎霞辖呷黠硖瘕',xian:'现先线限险闲鲜弦显咸掀献嫌宪陷馅仙纤腺冼涎娴衔锨猃蚬祆筅',xiang:'想象项相向像香乡详降湘厢镶襄享橡翔象庠缃芗葙鲞',xiao:'小笑校销消效晓萧肖宵削硝霄逍啸潇箫骁枭枵晓',xie:'些写谢协泄斜胁械屑鞋卸歇邪蟹泻泄契卸携谐邪楔颉撷缬绁',xin:'心新信欣辛薪芯馨忻昕锌镡',xing:'行性形兴星型醒姓刑幸荣杏邢腥猩惺荇刑陉',xiong:'兄熊胸凶雄汹芎',xiu:'修休秀袖锈臭嗅绣羞宿朽休貅馐髹鸺',xu:'许须需续序虚畜徐旭蓄绪叙絮邪恤墟戌硒栩吁盱酗恤',xuan:'选宣旋玄轩喧悬眩铉渲漩璇炫萱癣炫',xue:'学雪血穴靴谑薛削踅噱',xun:'寻训迅逊旬循熏询驯巡殉勋熏浚巽埙荀徇獯',ya:'呀压牙押鸭雅亚哑芽崖涯衙蚜丫轧垭讶迓玡崖',yan:'言眼烟研严验演岩颜炎沿宴延燕掩雁焰淹衍焉腌闫谚彦筵偃阉鄢妍菸崦恹',yang:'样央羊洋养阳扬仰痒氧秧鸯殃佯疡炀烊鞅',yao:'要药邀摇遥腰妖瑶咬耀钥姚舀夭肴肴窈夭吆尧曜繇',ye:'也业夜叶液野冶页噎耶爷邪烨晔谒揶',yi:'一以已意义易医食依移艺议益遗疑忆仪异遗宜椅沂姨彝诒乙亦抑轶揖邑轶佚译刈矣亦屹役亿',yin:'因引音银印阴饮隐姻吟瘾寅茵荫垠喑狺夤鄞堙',ying:'应影英营迎影映鹰蝇婴赢硬莹樱瑛蝇莺罂荥荧颍膺缨瀛',yo:'哟唷',yong:'用永拥勇涌咏庸俑踊佣咏镛甬墉鳙饔',you:'有由又优油游友右邮幼尤幽悠尤诱忧犹鱿莸莜铀酉攸黝',yu:'于与余预育鱼遇语余愈玉渔予裕雨欲逾愚愉渝虞舆宇禹俞余馀盂臾禺竽舁腴欤毓煜',yuan:'元原员远院圆缘源愿渊冤袁苑猿垣沅塬垸瑗辕爰',yue:'月约越乐跃岳曰悦阅钺粤曜龠瀹爚',yun:'运云均允韵蕴酝晕匀芸耘陨纭郧韫恽氲',za:'杂砸咋咂',zai:'在再灾载栽宰仔哉栽崽甾',zan:'赞暂攒咱拶昝瓚',zang:'脏葬藏臧弉驵',zao:'造早遭糟噪燥皂凿藻枣灶躁',ze:'则责择泽侧泽啧迮昃箦舴',zei:'贼',zen:'怎',zeng:'增憎赠综曾锃缯罾',zha:'扎炸诈咋吒喳楂砟蚱吒齄',zhai:'宅窄债寨摘齐祭翟瘴',zhan:'站展占战瞻沾詹盏斩辗绽栈颤占绽湛',zhang:'张涨章长帐仗障胀掌彰丈漳账杖璋嶂幛',zhao:'找照招着朝赵兆召罩爪诏沼肇嘲着',zhe:'这者着浙折哲遮蛰辙辄谪宅摺柘辄磔鹧',zhen:'真镇阵震珍诊枕侦诊针振斟朕祯祯畛轸稹',zheng:'政正整证争征蒸郑挣症丁睁铮筝怔峥峥钲',zhi:'之制直至指只治质志值知支职植纸执止致滞织枝帜殖挚稚趾掷峙痔窒卮轵黹轾卮陟骘枳',zhong:'中种重众终钟忠肿仲衷锺舯螽蔠',zhou:'周州洲粥皱宙咒昼骤轴肘帚咒宙胄绉碡籀酎',zhu:'主住注助猪株筑铸珠柱逐祝竹烛嘱煮著驻蛀嘱贮铸诛褚竺杼瘃舳橹',zhua:'抓爪拽',zhuai:'转拽嘬',zhuan:'专转赚砖撰传篆啭馔',zhuang:'装庄壮状妆桩奘撞幢',zhui:'追坠缀赘椎锥骓缒',zhun:'准屯谆肫窀',zhuo:'捉着桌浊酌拙灼卓茁琢啄镯浊濯焯诼斫斮禚',zi:'子自字资紫滋仔姿咨孜姊梓淄籽秭茈菑呲锱辎',zong:'总从综宗纵棕踪粽鬃偬腙',zou:'走奏揍邹陬驺诹',zu:'组族足祖阻租卒诅俎苴镞',zuan:'钻纂攥躜',zui:'最罪嘴醉咀蕞觜',zun:'尊遵樽樽鳟',zuo:'做作左坐昨座佐琢凿凿椹酢怍阼袚'};
function getPinyinInitials(str){
  if(!str)return'';
  var result='';
  for(var i=0;i<str.length;i++){
    var ch=str.charAt(i);
    if(/[a-zA-Z0-9]/.test(ch)){result+=ch.toLowerCase();continue;}
    if(/[\u4e00-\u9fa5]/.test(ch)){
      var found=false;
      for(var key in pinyinMap){
        if(pinyinMap[key].indexOf(ch)!==-1){result+=key;found=true;break;}
      }
      if(!found)result+='?';
    }
  }
  return result;
}
function matchPinyin(text,keyword){
  if(!text||!keyword)return false;
  var initials=getPinyinInitials(text);
  return initials.indexOf(keyword.toLowerCase())!==-1;
}
var calcTypeLabels={
  'mobile_single':'A-移网单卡','mobile_school':'A-移网单卡(校园)',
  'mobile_fusion':'A-融合业务','mobile_school_fusion':'A-校园融合',
  'mobile_finance':'A-金融合约','mobile_enterprise_num':'A-企业工作号/联通魔方',
  'mobile_voice':'A-语音/流量包','mobile_cloudxi':'A-联通云犀','mobile_5g':'A-5G随行专网','mobile_worknum':'A-隐私工作号',
  'mobile_highvalue':'A-高价值移网(在网积分)','mobile_highvalue_school':'A-高价值移网(校园)',
  'mobile_value':'A-价值经营','fixed_line_new':'B-专线新发展','fixed_line_renew':'B-专线续签',
  'fixed_broadband_new':'B-单宽新发展','fixed_broadband_renew':'B-单宽续费',
  'fixed_ftto':'B-智企光网FTTO','fixed_ftto_new':'B-智企光网(焕新)','fixed_zhijia':'B-联通智家','fixed_voice_new':'B-固话发展','fixed_voice_renew':'B-固话续费',
  'calc_std_high':'C-标品(毛利>=20%)','calc_std_mid':'C-标品(毛利10-20%)','calc_std_low':'C-标品(毛利<10%)',
  'calc_iot':'C-物联网','calc_ict':'C-新兴ICT',
  'act_dkh':'D-要客市场动作','act_sq':'E-商企市场动作','act_xy':'F-校园市场动作'
};
// 校区系数（每年7月评定一次）
var CAMPUS_OPTS=[{v:'0.9',t:'优势校区 ×0.9'},{v:'1',t:'均势校区 ×1'},{v:'1.2',t:'劣势校区 ×1.2'}];
// 企业工作号 / 联通魔方 专项系数
var SPECIAL_NUM_OPTS=[
  {v:'1',t:'无专项系数 ×1'},
  {v:'2',t:'91423097 升级版123元档 ×2'},
  {v:'1.5',t:'91423119 标准版83元档 ×1.5'},
  {v:'1.1',t:'91422233 联通魔方 ×1.1'}
];

// ===== 工具函数 =====
function escapeHtml(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function highlight(text,keyword){
  if(!text)return'';
  var s=escapeHtml(text);
  if(!keyword)return s;
  var escKw=escapeHtml(keyword).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return s.replace(new RegExp(escKw,'gi'),'<mark>$&</mark>');
}
function debounce(fn,wait){
  var timer=null;
  return function(){
    var args=arguments,self=this;
    clearTimeout(timer);
    timer=setTimeout(function(){fn.apply(self,args);},wait);
  };
}
function showToast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},2000);
}
function saveToHistory(type,points,detail){
  try{
    var history=JSON.parse(localStorage.getItem('calcHistory')||'[]');
    // 去重：最近一条 type+points+detail 完全相同则跳过
    if(history.length>0&&history[0].type===type&&history[0].points===points&&history[0].detail===detail){
      return;
    }
    history.unshift({type:type,typeLabel:calcTypeLabels[type]||type,points:points,detail:detail,time:new Date().toLocaleString('zh-CN')});
    if(history.length>50)history=history.slice(0,50);
    localStorage.setItem('calcHistory',JSON.stringify(history));
    renderHistory();
  }catch(e){}
}
function renderHistory(){
  var list=document.getElementById('historyList');
  try{
    var history=JSON.parse(localStorage.getItem('calcHistory')||'[]');
    if(history.length===0){list.innerHTML='<div class="history-empty">暂无计算历史</div>';return;}
    var html='';
    history.forEach(function(h){
      var pointsColor=h.points>3000?'#E60012':h.points>1000?'#e65100':'#2e7d32';
      html+='<div class="history-item">';
      html+='<div class="history-item-top">';
      html+='<span class="history-item-type">'+escapeHtml(h.typeLabel)+'</span>';
      html+='<span class="history-item-time">'+escapeHtml(h.time)+'</span>';
      html+='</div>';
      html+='<div class="history-item-points" style="color:'+pointsColor+'">'+h.points+' 分</div>';
      html+='<div class="history-item-detail">'+escapeHtml(h.detail)+'</div>';
      html+='</div>';
    });
    list.innerHTML=html;
  }catch(e){list.innerHTML='<div class="history-empty">暂无计算历史</div>';}
}

// ===== Tab 切换 (带记忆) =====
function switchTab(tabName){
  document.querySelectorAll('.tab-content').forEach(function(el){el.classList.remove('active');});
  document.querySelectorAll('.nav-item').forEach(function(el){el.classList.remove('active');});
  document.querySelectorAll('.bottom-nav-item').forEach(function(el){el.classList.remove('active');});
  document.getElementById('tab-'+tabName).classList.add('active');
  var navEl=document.querySelector('.nav-item[data-tab="'+tabName+'"]');
  if(navEl)navEl.classList.add('active');
  var bnEl=document.querySelector('.bottom-nav-item[data-tab="'+tabName+'"]');
  if(bnEl)bnEl.classList.add('active');
  try{localStorage.setItem('lastTab',tabName);}catch(e){}
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.nav-item').forEach(function(item){
  item.addEventListener('click',function(){switchTab(this.getAttribute('data-tab'));});
});
document.querySelectorAll('.bottom-nav-item').forEach(function(item){
  item.addEventListener('click',function(){switchTab(this.getAttribute('data-tab'));});
});

// ===== 产品统计 =====
function renderProductStats(){
  var products=APP_DATA.products;
  var cats={};
  products.forEach(function(p){cats[p.category]=(cats[p.category]||0)+1;});
  var html='<div class="stat-card"><div class="stat-num">'+products.length+'</div><div class="stat-label">产品总数</div></div>';
  Object.keys(cats).forEach(function(c){
    var activeCls=activeCategory===c?' active':'';
    html+='<div class="stat-card clickable'+activeCls+'" data-cat="'+c+'"><div class="stat-num">'+cats[c]+'</div><div class="stat-label">'+catLabel(c)+'</div></div>';
  });
  var count=(html.match(/stat-card/g)||[]).length;
  for(var i=count;i<4;i++){html+='<div class="stat-card"><div class="stat-num">-</div><div class="stat-label">-</div></div>';}
  document.getElementById('productStats').innerHTML=html;
  // 绑定分类卡片点击事件
  document.querySelectorAll('#productStats .stat-card.clickable').forEach(function(card){
    card.addEventListener('click',function(){
      var cat=this.getAttribute('data-cat');
      setCategory(cat);
    });
  });
}

// ===== 分类筛选 =====
function setCategory(cat){
  activeCategory=cat;
  // 更新分类卡片选中状态
  document.querySelectorAll('#productStats .stat-card.clickable').forEach(function(el){
    el.classList.toggle('active',el.getAttribute('data-cat')===cat);
  });
  // 更新筛选 chips 选中状态
  document.querySelectorAll('#categoryFilters .filter-chip').forEach(function(el){
    el.classList.toggle('active',el.getAttribute('data-cat')===cat);
  });
  renderProducts();
  // 滚动到筛选/列表区域，方便查看结果
  var target=document.getElementById('categoryFilters');
  if(target)target.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function renderCategoryFilters(){
  var cats=[];
  APP_DATA.products.forEach(function(p){if(cats.indexOf(p.category)===-1)cats.push(p.category);});
  var html='<div class="filter-chip'+(activeCategory==='all'?' active':'')+'" data-cat="all">全部</div>';
  cats.forEach(function(c){html+='<div class="filter-chip'+(activeCategory===c?' active':'')+'" data-cat="'+c+'">'+catLabel(c)+'</div>';});
  document.getElementById('categoryFilters').innerHTML=html;
  document.querySelectorAll('#categoryFilters .filter-chip').forEach(function(chip){
    chip.addEventListener('click',function(){setCategory(this.getAttribute('data-cat'));renderProductStats();});
  });
}

// ===== 搜索事件 =====
document.getElementById('productSearch').addEventListener('input',debounce(renderProducts,200));
document.getElementById('searchBtn').addEventListener('click',renderProducts);
document.getElementById('clearSearchBtn').addEventListener('click',function(){
  document.getElementById('productSearch').value='';renderProducts();document.getElementById('productSearch').focus();
});
document.getElementById('ruleSearch').addEventListener('input',debounce(renderRules,200));

// ===== 产品积分规则 =====
function getPointsRuleForProduct(p){
  var m=p.margin_range;
  if(m==='≥20%')return '增量:实缴x7%(封顶5000) | 存量:实缴x5%(封顶3000)';
  if(m==='20%>X≥10%')return '增量:实缴x5%(封顶3000) | 存量:实缴x3.5%(封顶2000)';
  if(m==='X<10%')return '增量:(X/标准毛利率)x实缴x每元积分(封顶3000) | 存量:x50%(封顶1000)';
  if(m==='按物联网连接规则')return '按物联网连接业务规则:增量x7%(封顶5000) | 存量x3%(封顶3000)';
  if(m&&m.indexOf('专网项目')!==-1)return '按专网项目上会评审通过的毛利率,对应档位核算';
  return '-';
}

// ===== 排序 =====
document.querySelectorAll('.product-table th[data-col]').forEach(function(th){
  th.addEventListener('click',function(){
    var col=this.getAttribute('data-col');
    if(sortCol===col){sortDir=sortDir==='asc'?'desc':'asc';}
    else{sortCol=col;sortDir='asc';}
    document.querySelectorAll('.product-table th').forEach(function(t){
      t.classList.remove('sort-active');
      var icon=t.querySelector('.sort-icon');
      if(icon)icon.textContent='';
    });
    this.classList.add('sort-active');
    this.querySelector('.sort-icon').textContent=sortDir==='asc'?' ▲':' ▼';
    renderProducts();
  });
});

// ===== 渲染产品列表 =====
function renderProducts(){
  var keyword=document.getElementById('productSearch').value.trim().toLowerCase();
  var kwOriginal=document.getElementById('productSearch').value.trim();
  var filtered=APP_DATA.products.slice();
  if(activeCategory!=='all'){
    filtered=filtered.filter(function(p){return p.category===activeCategory;});
  }
  if(keyword){
    filtered=filtered.filter(function(p){
      return p.name.toLowerCase().indexOf(keyword)!==-1||
             (p.product_code||'').toLowerCase().indexOf(keyword)!==-1||
             (p.block||'').toLowerCase().indexOf(keyword)!==-1||
             (p.margin_range||'').toLowerCase().indexOf(keyword)!==-1||
             matchPinyin(p.name,kwOriginal);
    });
  }
  // 排序
  if(sortCol){
    filtered.sort(function(a,b){
      var va=(a[sortCol]||'').toString().toLowerCase();
      var vb=(b[sortCol]||'').toString().toLowerCase();
      // 数字排序
      if(sortCol==='id'){va=parseInt(va)||0;vb=parseInt(vb)||0;}
      if(va<vb)return sortDir==='asc'?-1:1;
      if(va>vb)return sortDir==='asc'?1:-1;
      return 0;
    });
  }
  var pcEl=document.getElementById('productCount');
  pcEl.innerHTML='共找到 <span>'+filtered.length+'</span> 个产品';
  pcEl.classList.add('bump');
  clearTimeout(pcEl._bumpTimer);
  pcEl._bumpTimer=setTimeout(function(){pcEl.classList.remove('bump');},300);
  if(filtered.length===0){
    document.getElementById('productTableBody').innerHTML='';
    document.getElementById('productCards').innerHTML='';
    document.getElementById('noProducts').style.display='block';
    return;
  }
  document.getElementById('noProducts').style.display='none';
  // 桌面表格
  var html='';
  filtered.forEach(function(p){
    var catClass=catCls(p.category);
    var marginClass=marginMap[p.margin_range]||'';
    var ct=getCalcTypeForProduct(p);
    var isFav=isFavorite(p.id);
    var isChecked=compareList.indexOf(p.id)!==-1;
    html+='<tr class="clickable" data-calc-type="'+ct+'" data-product-name="'+escapeHtml(p.name)+'">';
    html+='<td>'+p.id+'</td>';
    html+='<td style="font-weight:500;">'+highlight(p.name,kwOriginal)+'</td>';
    html+='<td style="color:#888;">'+highlight(productBlock(p),kwOriginal)+'</td>';
    html+='<td><span class="margin-badge '+marginClass+'" title="'+escapeHtml(marginTitle(p))+'">'+escapeHtml(marginLabel(p))+'</span></td>';
    html+='<td style="font-size:12px;color:#666;">'+highlight(p.product_code||'-',kwOriginal)+'</td>';
    html+='<td><span class="cat-badge '+catClass+'">'+catLabel(p.category)+'</span></td>';
    html+='<td style="font-size:12px;color:#555;">'+getPointsRuleForProduct(p)+'</td>';
    html+='<td><span class="fav-star'+(isFav?' active':'')+'" data-fav-id="'+p.id+'" onclick="event.stopPropagation();toggleFavorite('+p.id+')">'+(isFav?'★':'☆')+'</span></td>';
    html+='<td><input type="checkbox" class="compare-checkbox" data-compare-id="'+p.id+'" '+(isChecked?'checked':'')+' onclick="event.stopPropagation();toggleCompare('+p.id+',this.checked)"></td>';
    html+='</tr>';
  });
  document.getElementById('productTableBody').innerHTML=html;
  // 移动端卡片
  var cardHtml='';
  filtered.forEach(function(p){
    var catClass=catCls(p.category);
    var marginClass=marginMap[p.margin_range]||'';
    var ct=getCalcTypeForProduct(p);
    var isFav=isFavorite(p.id);
    var isChecked=compareList.indexOf(p.id)!==-1;
    cardHtml+='<div class="product-card" data-calc-type="'+ct+'" data-product-name="'+escapeHtml(p.name)+'">';
    cardHtml+='<div class="product-card-name" style="display:flex;justify-content:space-between;align-items:center;">'+highlight(p.name,kwOriginal)+'<span class="fav-star'+(isFav?' active':'')+'" data-fav-id="'+p.id+'" onclick="event.stopPropagation();toggleFavorite('+p.id+')">'+(isFav?'★':'☆')+'</span></div>';
    cardHtml+='<div class="product-card-row"><span>编码: '+highlight(p.product_code||'-',kwOriginal)+'</span><span><span class="cat-badge '+catClass+'">'+catLabel(p.category)+'</span></span></div>';
    cardHtml+='<div class="product-card-row"><span>毛利率: <span class="margin-badge '+marginClass+'">'+escapeHtml(marginLabel(p))+'</span></span><label onclick="event.stopPropagation();" style="font-size:12px;color:#666;"><input type="checkbox" class="compare-checkbox" data-compare-id="'+p.id+'" '+(isChecked?'checked':'')+' onclick="event.stopPropagation();toggleCompare('+p.id+',this.checked)"> 对比</label></div>';
    cardHtml+='<div class="product-card-row" style="color:#999;">取数分组: '+highlight(productBlock(p),kwOriginal)+'</div>';
    cardHtml+='</div>';
  });
  document.getElementById('productCards').innerHTML=cardHtml;
  // 绑定点击跳转计算器
  document.querySelectorAll('[data-calc-type]').forEach(function(el){
    el.addEventListener('click',function(){
      var ct=this.getAttribute('data-calc-type');
      var pName=this.getAttribute('data-product-name')||'';
      if(ct){
        switchTab('calculator');
        var sel=document.getElementById('calcType');
        // 确保下拉框正确选中
        for(var i=0;i<sel.options.length;i++){
          if(sel.options[i].value===ct){sel.selectedIndex=i;break;}
        }
        sel.classList.add('calc-preset');
        updateCalcForm();
        // 显示产品提示条
        var hint=document.getElementById('productHint');
        var hintText=document.getElementById('productHintText');
        var selOption=sel.options[sel.selectedIndex];
        var typeLabel=selOption?selOption.text:'';
        hintText.textContent='当前产品：'+pName+'  →  业务类型：'+typeLabel;
        hint.style.display='flex';
        showToast('已选择「'+pName+'」，跳转积分计算器');
        // 滚动到表单区域
        setTimeout(function(){
          var formArea=document.getElementById('calcFormArea');
          if(formArea&&formArea.innerHTML){formArea.scrollIntoView({behavior:'smooth',block:'start'});}
        },150);
      }else{
        showToast('该产品暂无对应的计算器类型');
      }
    });
  });
}

// 产品对应的计算器类型
function getCalcTypeForProduct(p){
  var m=p.margin_range;
  if(m==='≥20%')return 'calc_std_high';
  if(m==='20%>X≥10%')return 'calc_std_mid';
  if(m==='X<10%')return 'calc_std_low';
  if(m==='按物联网连接规则')return 'calc_iot';
  if(m&&m.indexOf('专网项目')!==-1)return 'calc_std_low';
  return '';
}

// ===== 规则长文本（超长自动折叠，点击展开） =====
function textClassFor(label){
  if(label==='积分标准')return 'rule-item-standard';
  if(label==='统计口径')return 'rule-item-scope';
  if(label==='积分举例')return 'rule-item-example';
  return 'rule-item-note';
}
function renderLongText(label,text,kw){
  var long=String(text).length>130;
  var h='<div class="'+textClassFor(label)+(long?' rule-foldable':'')+'">';
  h+='<span class="rule-label">'+label+'：</span>';
  h+='<div class="rule-text'+(long?' folded':'')+'">'+highlight(text,kw)+'</div>';
  if(long)h+='<span class="rule-fold-toggle">展开全文 ▾</span>';
  h+='</div>';
  return h;
}
function bindRuleFoldToggles(){
  document.querySelectorAll('.rule-fold-toggle').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var wrap=this.parentElement;
      var text=wrap.querySelector('.rule-text');
      if(!text)return;
      var folded=text.classList.toggle('folded');
      this.textContent=folded?'展开全文 ▾':'收起 ▴';
    });
  });
}

// ===== 渲染积分规则 =====
function renderRules(){
  var keyword=document.getElementById('ruleSearch').value.trim().toLowerCase();
  var kwOriginal=document.getElementById('ruleSearch').value.trim();
  var groups={};
  APP_DATA.rules.forEach(function(r){
    if(ruleCatFilter!=='all'&&!r.business_type.startsWith(ruleCatFilter+'-'))return;
    if(!groups[r.business_type])groups[r.business_type]=[];
    groups[r.business_type].push(r);
  });
  var html='';
  Object.keys(groups).forEach(function(type){
    var rules=groups[type];
    if(keyword){
      rules=rules.filter(function(r){
        return r.business_type.toLowerCase().indexOf(keyword)!==-1||
               r.business_subtype.toLowerCase().indexOf(keyword)!==-1||
               r.detail.toLowerCase().indexOf(keyword)!==-1||
               r.standard.toLowerCase().indexOf(keyword)!==-1;
      });
    }
    if(rules.length===0)return;
    html+='<div class="rule-group">';
    html+='<div class="rule-group-header"><span>'+highlight(type,kwOriginal)+' ('+rules.length+'条)</span><span class="toggle-icon">+</span></div>';
    html+='<div class="rule-group-body">';
    rules.forEach(function(r){
      var calcType=getCalcTypeForRule(r);
      html+='<div class="rule-item">';
      html+='<div class="rule-item-title">'+highlight(r.business_subtype,kwOriginal)+'</div>';
      if(r.detail)html+='<div class="rule-item-detail">【'+highlight(r.detail,kwOriginal)+'】</div>';
      html+='<div class="rule-tag-row">';
      if(r.points_type)html+='<span class="rule-tag rule-tag-points">'+highlight(r.points_type,kwOriginal)+'</span>';
      if(r.revise)html+='<span class="rule-tag rule-tag-revise">'+highlight(r.revise,kwOriginal)+'</span>';
      html+='</div>';
      if(r.standard)html+=renderLongText('积分标准',r.standard,kwOriginal);
      if(r.scope)html+=renderLongText('统计口径',r.scope,kwOriginal);
      if(r.example)html+=renderLongText('积分举例',r.example,kwOriginal);
      if(r.note)html+=renderLongText('备注',r.note,kwOriginal);
      if(calcType)html+='<div class="rule-go-calc" data-calc-type="'+calcType+'">去计算 →</div>';
      html+='</div>';
    });
    html+='</div></div>';
  });
  document.getElementById('rulesContainer').innerHTML=html;
  // 绑定长文本折叠
  bindRuleFoldToggles();
  // 搜索时命中内容自动展开，避免结果被折叠挡住
  if(keyword){
    document.querySelectorAll('.rule-foldable .rule-text.folded').forEach(function(t){
      t.classList.remove('folded');
      var tg=t.parentElement.querySelector('.rule-fold-toggle');
      if(tg)tg.textContent='收起 ▴';
    });
  }
  // 绑定折叠
  document.querySelectorAll('.rule-group-header').forEach(function(header){
    header.addEventListener('click',function(){
      this.nextElementSibling.classList.toggle('open');
      var icon=this.querySelector('.toggle-icon');
      icon.textContent=this.nextElementSibling.classList.contains('open')?'-':'+';
    });
  });
  // 绑定去计算按钮
  document.querySelectorAll('.rule-go-calc').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var ct=this.getAttribute('data-calc-type');
      if(ct){
        switchTab('calculator');
        var sel=document.getElementById('calcType');
        for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ct){sel.selectedIndex=i;break;}}
        sel.classList.add('calc-preset');
        updateCalcForm();
        var hint=document.getElementById('productHint');
        var hintText=document.getElementById('productHintText');
        var selOption=sel.options[sel.selectedIndex];
        hintText.textContent='来自积分规则页 → 业务类型：'+(selOption?selOption.text:'');
        hint.style.display='flex';
        showToast('已跳转到积分计算器');
        setTimeout(function(){var fa=document.getElementById('calcFormArea');if(fa&&fa.innerHTML)fa.scrollIntoView({behavior:'smooth',block:'start'});},150);
      }
    });
  });
  // 搜索时自动全部展开
  if(keyword){
    document.querySelectorAll('.rule-group-body').forEach(function(b){
      b.classList.add('open');
      var icon=b.previousElementSibling.querySelector('.toggle-icon');
      if(icon)icon.textContent='-';
    });
  }else{
    var firstBody=document.querySelector('.rule-group-body');
    if(firstBody){
      firstBody.classList.add('open');
      var firstIcon=document.querySelector('.rule-group-header .toggle-icon');
      if(firstIcon)firstIcon.textContent='-';
    }
  }
}

// ===== 全部展开/收起 =====
document.getElementById('expandAllBtn').addEventListener('click',function(){
  document.querySelectorAll('.rule-group-body').forEach(function(b){
    b.classList.add('open');
    var icon=b.previousElementSibling.querySelector('.toggle-icon');
    if(icon)icon.textContent='-';
  });
});
document.getElementById('collapseAllBtn').addEventListener('click',function(){
  document.querySelectorAll('.rule-group-body').forEach(function(b){
    b.classList.remove('open');
    var icon=b.previousElementSibling.querySelector('.toggle-icon');
    if(icon)icon.textContent='+';
  });
});

// ===== 计算器表单 =====
document.getElementById('calcType').addEventListener('change',function(){
  // 手动切换时移除预选高亮和产品提示
  this.classList.remove('calc-preset');
  document.getElementById('productHint').style.display='none';
  updateCalcForm();
});
// 关闭产品提示条
document.getElementById('productHintClose').addEventListener('click',function(){
  document.getElementById('productHint').style.display='none';
  document.getElementById('calcType').classList.remove('calc-preset');
});

function updateCalcForm(){
  var type=document.getElementById('calcType').value;
  var area=document.getElementById('calcFormArea');
  document.getElementById('calcResult').style.display='none';
  if(!type){area.innerHTML='';return;}
  var configs={
    'mobile_single':{fields:[
      {id:'rent',label:'实际月租(元)',type:'number',ph:'如59'},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足首缴标准',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)，不核发积分'}]}
    ],note:'标准分值 = 实际月租 × 异网系数 × 首缴系数 × 渠道分享系数。99元及以下需首缴100元、129元及以上需首缴200元，否则不核算积分（单位证件后付费用户建议默认首存系数为1）'},
    'mobile_school':{fields:[
      {id:'rent',label:'产品套餐月租(元)',type:'number',ph:'如39'},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足1倍月租首存',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)，不核发积分'}]},
      {id:'campus',label:'校区系数',type:'select',opts:CAMPUS_OPTS}
    ],note:'移网单卡（校园）= 产品套餐月租 × 异网系数 × 首缴系数 × 校区系数 × 渠道分享系数。校区系数每年7月评定一次（优势×0.9 / 均势×1 / 劣势×1.2）；剔除三无验证'},
    'mobile_fusion':{fields:[
      {id:'rent',label:'融合主套餐实际月费(元)',type:'number',ph:'如99'},
      {id:'mode',label:'融合方式',type:'select',opts:[
        {v:'1.2',t:'新移+新宽（×1.2）'},
        {v:'1',t:'新移+老宽 / 老移+新宽 · 融合后月费≥融合前（×1）'},
        {v:'0.5',t:'新移+老宽 / 老移+新宽 · 融合后月费<融合前（×0.5）'}
      ]},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足首缴标准',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)'}]}
    ],note:'冰激凌融合/数智慧企：不再重复计算移网单卡发展积分，标准分值及约束规则同单移'},
    'mobile_school_fusion':{fields:[
      {id:'rent',label:'融合主套餐实际月费(元)',type:'number',ph:'如49'},
      {id:'mode',label:'融合方式',type:'select',opts:[
        {v:'1.2',t:'新移+新宽（×1.2）'},
        {v:'1',t:'新移+老宽 / 老移+新宽 · 融合后月费≥融合前（×1）'},
        {v:'0.5',t:'新移+老宽 / 老移+新宽 · 融合后月费<融合前（×0.5）'}
      ]},
      {id:'campus',label:'校区系数',type:'select',opts:CAMPUS_OPTS},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足1倍月租首存',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)'}]}
    ],note:'冰激凌融合/数智慧企（校园）= 融合主套餐实际月费 × 融合系数 × 校区系数（另乘异网、首缴系数）。已剔除三无验证、剔除"宽带是否实装"限制，调整为"有效的融合组网关系"判定'},
    'mobile_finance':{fields:[
      {id:'rent',label:'移网标准月租(元)',type:'number',ph:'如59'},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足首缴标准',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)'}]}
    ],note:'2B/2B2C金融合约（含2B分期、建银分期、先享分期等）：积分 = 移网标准分值 × 2；出账月租应包含金融分期包月租'},
    'mobile_enterprise_num':{fields:[
      {id:'rent',label:'实际月租(元)',type:'number',ph:'如123'},
      {id:'special',label:'专项系数（套餐ID）',type:'select',opts:SPECIAL_NUM_OPTS},
      {id:'isUnicom',label:'是否异网策反',type:'select',opts:[{v:'0.8',t:'非异网(×0.8)'},{v:'1.2',t:'异网(×1.2)'}]},
      {id:'firstPay',label:'是否满足首缴标准',type:'select',opts:[{v:'1',t:'满足(×1)'},{v:'0',t:'不满足(×0)'}]}
    ],note:'企业工作号、联通魔方：标准分值 = 实际月租 × 异网系数 × 首缴系数 × 专项系数 × 渠道分享系数（专项系数为本版新增）'},
    'mobile_voice':{fields:[
      {id:'rent',label:'语音/流量包实际月租(元)',type:'number',ph:'如30'}
    ],note:'存量用户办理语音/流量包：积分 = 实际月租 × 1；需月租≥10元，6个月内计算1次订购积分'},
    'mobile_cloudxi':{fields:[
      {id:'pkg',label:'联通云犀收费包（可选，自动带出月费）',type:'yunxi'},
      {id:'rent',label:'云犀包月费(元)',type:'number',ph:'如20'}
    ],note:'存量用户办理联通云犀：积分 = 订购的云犀包月费 × 1；重复订购规则为6个月内计算1次订购积分'},
    'mobile_5g':{fields:[
      {id:'rent',label:'5G随行专网包月费(元)',type:'number',ph:'如30'}
    ],note:'存量用户办理5G随行专网：积分 = 随行专网包月费 × 1；需为集团成员收费产品'},
    'mobile_worknum':{fields:[
      {id:'rent',label:'工作号平台月租(元)',type:'number',ph:'如25'},
      {id:'count',label:'项目号码数量',type:'number',ph:'如10'}
    ],note:'隐私工作号新增：积分 = 工作号平台月租 × 1 × 项目号码数量；需完成实名认证并正式上架号码，且号码月租≥25元'},
    'mobile_highvalue':{fields:[
      {id:'rent',label:'每月净月费(元)',type:'number',ph:'如99'},
      {id:'band',label:'入网首月实际月租档位',type:'select',opts:[{v:'0.2',t:'[39,129) 在网积分每月×0.2'},{v:'0.5',t:'[129,∞) 高价值积分每月×0.5'}]},
      {id:'months',label:'核算月数（T+6~T+15共10个月）',type:'number',ph:'10',val:'10'}
    ],note:'新发展高价值移网（含移网单卡、"新移+新宽"融合）：以发展月为T月，T+6至T+15月每月核发「净月费 × 档位系数」。核发当月降档至39元以下则不核算在网积分；129元档降档至129元以下按[39,129)档核算'},
    'mobile_highvalue_school':{fields:[
      {id:'rent',label:'每月净月费(元)',type:'number',ph:'如39'},
      {id:'campus',label:'校区系数',type:'select',opts:CAMPUS_OPTS},
      {id:'months',label:'核算月数（T+6~T+15共10个月）',type:'number',ph:'10',val:'10'}
    ],note:'新发展高价值移网（校园）= 每月净月费 × 0.2 × 校区系数；针对2025年7月及以后入网数据按此规则核算'},
    'mobile_value':{fields:[
      {id:'diff',label:'ARPU提升差值(元)',type:'number',ph:'如15'},
      {id:'level',label:'提升档位',type:'select',opts:[{v:'2',t:'提升[2,10) → ×2'},{v:'2.5',t:'提升[10,30) → ×2.5'},{v:'3',t:'提升[30,∞) → ×3'}]}
    ],note:'价值经营：积分 = 剔除优惠后套餐提升差值 × 档位倍数（2 / 2.5 / 3倍）；统一按受理后三个月平均ARPU提升情况计算，T+4月核算；仅统计50合约，剔除赠费/赠送类及大金融合约'},
    'fixed_line_new':{fields:[
      {id:'rent',label:'线路月租(元/月)',type:'number',ph:'如500'},
      {id:'discount',label:'折扣系数(默认1，如0.3/0.8)',type:'number',ph:'1',val:'1'},
      {id:'postPaid',label:'后付回款金额(元)',type:'number',ph:'如0'},
      {id:'prePaid',label:'预付回款金额(元)',type:'number',ph:'如0'},
      {id:'counter',label:'异网策反（原积分叠加10%）',type:'check',text:'是，异网策反（自然客户近6个月无同类业务在网）'}
    ],note:'专线联网新发展 = 发展积分×折扣系数 + 回款积分。发展积分=线路月租×14%（T+1月核算1个月）；回款积分=(后付×0.6+预付×0.8)×10%；月度个人总积分8000分封顶。短期线路<6个月按0.3倍计发展积分；创新项目低于基线价格红线按80%核算；1G及以上大带宽不纳入积分体系'},
    'fixed_line_renew':{fields:[
      {id:'postPaid',label:'后付回款金额(元)',type:'number',ph:'如0'},
      {id:'prePaid',label:'预付回款金额(元)',type:'number',ph:'如0'},
      {id:'discount',label:'折扣系数(默认1)',type:'number',ph:'1',val:'1'}
    ],note:'专线存量续签积分 = (后付×0.6 + 预付×0.8) × 折扣系数 × 3%；月度个人总积分5000分封顶。回款积分责任关系优先从存量营销责任关系匹配客户经理'},
    'fixed_broadband_new':{fields:[
      {id:'rent',label:'套餐月资费(元)',type:'number',ph:'如99'},
      {id:'payType',label:'缴费方式',type:'select',opts:[{v:'0.8',t:'非按年趸交(×0.8)'},{v:'1.1',t:'趸交预付1年(×1.1)'},{v:'1.2',t:'趸交预付2年(×1.2)'}]}
    ],note:'单宽发展积分 = 套餐月资费价格 × 1 × 趸交系数（含单宽带、二宽、云宽带；套餐月资费包含IPTV和宽视界）。宽带限制实装'},
    'fixed_broadband_renew':{fields:[
      {id:'rent',label:'套餐月资费(元)',type:'number',ph:'如99'}
    ],note:'单宽续费积分 = 套餐月资费 × 5%；宽带入网第13个月(T+13)至36个月(T+36)按月发放，次月核发，核算月当月状态正常。不判断是否缴费，只判断是否欠费'},
    'fixed_ftto':{fields:[
      {id:'bill',label:'首月出账(元)',type:'number',ph:'如200'},
      {id:'ver',label:'版本',type:'select',opts:[{v:'lump50',t:'趸交版（首月出账×50%，T+1~T+6月一次性核发）'},{v:'month',t:'分月版（发展=首月出账×1，另计出账积分）'}]}
    ],note:'智企光网(FTTO)：分月版发展积分=首月出账×1倍（T+1月一次性核发），出账积分=月出账×20%（T+2月起共核发12个月）。首月出账需缴费且非停机'},
    'fixed_ftto_new':{fields:[
      {id:'bill',label:'首月出账(元)',type:'number',ph:'如200'},
      {id:'ver',label:'版本',type:'select',opts:[{v:'lump100',t:'趸交版（首月出账×100%，T+1~T+6月核发）'},{v:'month',t:'分月版（发展=出账×100%，出账积分×20%×5个月）'},{v:'l12',t:'智企光网(L版) 12期（固定100分）'},{v:'l24',t:'智企光网(L版) 24期（固定150分）'}]}
    ],note:'智企光网-焕新(FTTO)：趸交版积分=首月出账×100%；分月版发展积分=首月出账×100%，出账积分=月出账×20%（T+2月起共核发5个月）；L版固定积分12期100分、24期150分，T+1月一次性核发'},
    'fixed_zhijia':{fields:[
      {id:'count',label:'办理数量(户)',type:'number',ph:'如1'}
    ],note:'联通智家：固定积分50分/户，T+1月一次性核发（本项沿用原有规则）'},
    'fixed_voice_new':{fields:[
      {id:'bill',label:'月出账(元)',type:'number',ph:'如300'}
    ],note:'普通固话/语音中继/云讯通发展积分 = 月出账 × 12%；入网1-12个月按月核发，次月核发，单月单号码积分封顶2000分'},
    'fixed_voice_renew':{fields:[
      {id:'bill',label:'月出账(元)',type:'number',ph:'如300'}
    ],note:'固话/语音中继/云讯通续费积分 = 月出账 × 5%；入网第13-24个月按月发放，单月单号码积分封顶1000分'},
    'calc_std_high':{fields:[
      {id:'amount',label:'实缴金额(元)',type:'number',ph:'如10000'},
      {id:'type',label:'增量/存量',type:'select',opts:[{v:'7',t:'增量（×7%）'},{v:'5',t:'存量续费（×5%）'}]}
    ],note:'小颗粒标品 毛利率X≥20%：增量=实缴×7%（月度个人总积分封顶5000分）；存量续费=实缴×5%（封顶3000分）'},
    'calc_std_mid':{fields:[
      {id:'amount',label:'实缴金额(元)',type:'number',ph:'如10000'},
      {id:'type',label:'增量/存量',type:'select',opts:[{v:'5',t:'增量（×5%）'},{v:'3.5',t:'存量续费（×3.5%）'}]}
    ],note:'小颗粒标品 20%>X≥10%：增量=实缴×5%（月度个人总积分封顶3000分）；存量续费=实缴×3.5%（封顶2000分）'},
    'calc_std_low':{fields:[
      {id:'amount',label:'实缴金额(元)',type:'number',ph:'如10000'},
      {id:'actualMargin',label:'实际毛利率X(%)',type:'number',ph:'如8'},
      {id:'stdMargin',label:'标准毛利率(%)',type:'number',ph:'20',val:'20'},
      {id:'type',label:'增量/存量',type:'select',opts:[{v:'inc',t:'增量'},{v:'renew',t:'存量续费（增量×50%）'}]}
    ],note:'小颗粒标品 X<10%（应对市场竞争降低产品毛利率）：增量=(X/标准毛利率)×实缴×标准毛利率对应的每元积分（封顶3000分）；存量续费=增量×50%（封顶1000分）'},
    'calc_iot':{fields:[
      {id:'amount',label:'实缴金额(元)',type:'number',ph:'如10000'},
      {id:'type',label:'增量/存量',type:'select',opts:[{v:'7',t:'增量（×7%）'},{v:'3',t:'存量（×3%）'}]}
    ],note:'物联网连接（非资源型/本地行业客户）：增量=系统实缴金额×7%（封顶5000分）；存量=系统实缴金额×3%（封顶3000分）。净增收入定义：按去年12月31日出账收入拍照，今年按月比对，净增部分为增量收入；需按商品ID剔除指定连接商品'},
    'calc_ict':{fields:[
      {id:'amount',label:'项目计收金额(万元)',type:'number',ph:'如50'}
    ],note:'新兴ICT：计收金额≤200万，标准积分 = 项目计收金额每1000元/1分，个人年度总积分10000分封顶；计收金额>200万不参与积分核算'},
    'act_dkh':{fields:[
      {id:'visitFreq',label:'当月拜访频次(次)',type:'number',ph:'如16'},
      {id:'visitCov',label:'当月拜访覆盖率(%)',type:'number',ph:'如20'},
      {id:'oppCount',label:'当月新增商机(条)',type:'number',ph:'如5'},
      {id:'custCount',label:'资料完整名单客户数(户)',type:'number',ph:'如5'}
    ],note:'D-要客（行业）市场动作积分：拜访频次满分100分（当月拜访≥16次积满分，[0,16]线性）；拜访覆盖率满分50分（≥20%积满分，[0,20%]线性）；商机录入每条20分（满分100）；客户资料完整性每户10分（满分50）。省分结合附件上传率、异常打卡进行真实性预警'},
    'act_sq':{fields:[
      {id:'visitCount',label:'当月客户拜访次数(次，剔重后)',type:'number',ph:'如10'},
      {id:'newCust',label:'潜客新增(户)',type:'number',ph:'如0'},
      {id:'oppCount',label:'商机录入(条)',type:'number',ph:'如0'},
      {id:'signCount',label:'客户签约(个)',type:'number',ph:'如0'},
      {id:'toolCount',label:'商企沙盘当月登录次数(次)',type:'number',ph:'如5'}
    ],note:'E-商企市场动作积分：客户拜访满分100分（当月≥10次积满分，[0,10]线性）；销售行为满分100分（潜客新增5分/户、商机录入10分/条、客户签约30分/个）；数字化工具使用满分100分（当月登录≥5次积满分，每次20分）。不限定客户范围，按商企经理计'},
    'act_xy':{fields:[
      {id:'visitCount',label:'当月客户拜访次数(次，剔重后)',type:'number',ph:'如10'},
      {id:'schoolCount',label:'圈校数量(校)',type:'number',ph:'如0'},
      {id:'eventCount',label:'日常营销场次(场·校)',type:'number',ph:'如0'},
      {id:'oppCount',label:'商机录入(条)',type:'number',ph:'如0'}
    ],note:'F-校园市场动作积分：客户拜访满分100分（当月≥10次积满分）；营销动作满分100分（圈校50分/校、日常营销一次一场一校20分）；商机录入满分100分（每条20分）'}
  };
  var cfg=configs[type];
  if(!cfg){area.innerHTML='';return;}
  var html='<div class="calc-row">';
  cfg.fields.forEach(function(f){
    html+='<div class="calc-field"><label class="calc-label">'+f.label+'</label>';
    if(f.type==='select'){
      html+='<select class="calc-select" id="calc_'+f.id+'">';
      f.opts.forEach(function(o){html+='<option value="'+o.v+'">'+o.t+'</option>';});
      html+='</select>';
    }else if(f.type==='yunxi'){
      html+='<select class="calc-select" id="calc_'+f.id+'">';
      html+='<option value="">— 选择云犀收费包（可不选） —</option>';
      (APP_DATA.yunxi||[]).forEach(function(y){
        html+='<option value="'+y.fee+'">'+escapeHtml(y.name)+' · '+y.fee+'元/月</option>';
      });
      html+='</select>';
    }else if(f.type==='check'){
      html+='<label class="calc-check"><input type="checkbox" id="calc_'+f.id+'"'+(f.checked?' checked':'')+'><span>'+(f.text||'')+'</span></label>';
    }else{
      html+='<input type="'+f.type+'" class="calc-input" id="calc_'+f.id+'" placeholder="'+(f.ph||'')+'"'+(f.val?' value="'+f.val+'"':'')+'>';
    }
    html+='</div>';
  });
  html+='</div>';
  if(cfg.note)html+='<div class="note-box">'+cfg.note+'</div>';
  html+='<button class="search-btn" style="margin-top:16px;" id="calcBtn">计算积分</button>';
  area.innerHTML=html;
  // 云犀包下拉：选中后自动带出月费
  var pkgSel=document.getElementById('calc_pkg');
  if(pkgSel){
    pkgSel.addEventListener('change',function(){
      var rentEl=document.getElementById('calc_rent');
      if(rentEl&&this.value)rentEl.value=this.value;
      doCalc();
    });
  }
  // 绑定按钮
  document.getElementById('calcBtn').addEventListener('click',doCalc);
  // 输入防抖计算：停止输入 600ms 后再算，避免连击产生大量历史记录
  var debouncedCalc=debounce(doCalc,600);
  document.querySelectorAll('#calcFormArea input').forEach(function(el){
    el.addEventListener('input',debouncedCalc);
    el.addEventListener('keydown',function(e){
      if(e.key==='Enter'){doCalc();}
    });
    if(el.type==='checkbox')el.addEventListener('change',doCalc);
  });
  document.querySelectorAll('#calcFormArea select').forEach(function(el){
    el.addEventListener('change',doCalc);
  });
}

// ===== 计算积分 =====
function doCalc(){
  var type=document.getElementById('calcType').value;
  if(!type)return;
  function v(id){var el=document.getElementById('calc_'+id);return el?(parseFloat(el.value)||0):0;}
  function vs(id){var el=document.getElementById('calc_'+id);return el?el.value:'';}
  function vc(id){var el=document.getElementById('calc_'+id);return el&&el.checked?1:0;}
  // 检查是否有输入
  var hasInput=false;
  document.querySelectorAll('#calcFormArea input').forEach(function(el){
    if(el.value&&el.value!=='')hasInput=true;
  });
  if(!hasInput){document.getElementById('calcResult').style.display='none';return;}

  var points=0,detail='';
  switch(type){
    case'mobile_single':{
      var r=v('rent'),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay'));
      points=r*u*f;
      detail='计算: '+r+' x '+u+'(异网系数) x '+f+'(首缴系数) = '+points.toFixed(1)+' 分';
      break;}
    case'mobile_fusion':{
      var r=v('rent'),m=parseFloat(vs('mode')),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay'));
      points=r*m*u*f;
      var mTag=m===1.2?'1.2(新移+新宽)':(m===1?'1(新移+老宽/老移+新宽·融合后≥融合前)':'0.5(新移+老宽/老移+新宽·融合后<融合前)');
      detail='计算: '+r+' x '+mTag+' x '+u+'(异网) x '+f+'(首缴) = '+points.toFixed(1)+' 分\n不再重复计算移网单卡发展积分';
      break;}
    case'mobile_school':{
      var r=v('rent'),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay')),c=parseFloat(vs('campus'));
      points=r*u*f*c;
      detail='计算: '+r+'(套餐月租) x '+u+'(异网系数) x '+f+'(首缴系数) x '+c+'(校区系数) = '+points.toFixed(1)+' 分\n校区系数每年7月评定一次（优势0.9 / 均势1 / 劣势1.2）';
      break;}
    case'mobile_school_fusion':{
      var r=v('rent'),m=parseFloat(vs('mode')),c=parseFloat(vs('campus')),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay'));
      points=r*m*c*u*f;
      var mTag=m===1.2?'1.2(新移+新宽)':(m===1?'1(融合后≥融合前)':'0.5(融合后<融合前)');
      detail='计算: '+r+'(融合月费) x '+mTag+' x '+c+'(校区系数) x '+u+'(异网) x '+f+'(首缴) = '+points.toFixed(1)+' 分\n校园融合已剔除三无验证，按"有效的融合组网关系"判定';
      break;}
    case'mobile_finance':{
      var r=v('rent'),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay'));
      points=r*u*f*2;
      detail='计算: '+r+' x '+u+'(异网) x '+f+'(首缴) x 2(金融合约) = '+points.toFixed(1)+' 分';
      break;}
    case'mobile_voice':{
      var r=v('rent');points=r*1;
      detail='计算: '+r+' x 1 = '+points.toFixed(1)+' 分 (需月租>=10元)';
      break;}
    case'mobile_cloudxi':{
      var r=v('rent');points=r*1;
      var pkgEl=document.getElementById('calc_pkg');
      var pkgName='';
      if(pkgEl&&pkgEl.value){
        var opt=pkgEl.options[pkgEl.selectedIndex];
        pkgName=(opt?opt.text:'')+'\n';
      }
      detail=pkgName+'计算: '+r+' x 1 = '+points.toFixed(1)+' 分\n重复订购规则: 6个月内计算1次订购积分';
      break;}
    case'mobile_5g':{
      var r=v('rent');points=r*1;
      detail='计算: '+r+' x 1 = '+points.toFixed(1)+' 分';
      break;}
    case'mobile_enterprise_num':{
      var r=v('rent'),u=parseFloat(vs('isUnicom')),f=parseFloat(vs('firstPay')),sp=parseFloat(vs('special'));
      points=r*u*f*sp;
      detail='计算: '+r+'(实际月租) x '+u+'(异网系数) x '+f+'(首缴系数) x '+sp+'(专项系数) = '+points.toFixed(1)+' 分\n企业工作号、联通魔方适用；专项系数为本版新增';
      break;}
    case'mobile_worknum':{
      var r=v('rent'),c=v('count');points=r*1*c;
      detail='计算: '+r+' x 1 x '+c+'(号码数) = '+points.toFixed(1)+' 分 (需月租>=25元, 完成实名认证并正式上架)';
      break;}
    case'mobile_highvalue':{
      var r=v('rent'),b=parseFloat(vs('band')),mo=v('months')||10;
      points=r*b*mo;
      detail='计算: '+r+'(每月净月费) x '+b+'(档位系数) x '+mo+'(个月) = '+points.toFixed(1)+' 分\n单月积分 '+ (r*b).toFixed(1) +' 分 · 从T+6月至T+15月按月核发\n核发当月降档至39元以下不核算在网积分';
      break;}
    case'mobile_highvalue_school':{
      var r=v('rent'),c=parseFloat(vs('campus')),mo=v('months')||10;
      points=r*0.2*c*mo;
      detail='计算: '+r+'(每月净月费) x 0.2 x '+c+'(校区系数) x '+mo+'(个月) = '+points.toFixed(1)+' 分\n2025年7月及以后入网数据按此规则核算';
      break;}
    case'mobile_value':{
      var d=v('diff'),l=parseFloat(vs('level'));points=d*l;
      detail='计算: '+d+'(ARPU差值) x '+l+'(倍数) = '+points.toFixed(1)+' 分';
      break;}
    case'fixed_line_new':{
      var r=v('rent'),d=v('discount')||1,po=v('postPaid'),pr=v('prePaid');
      var dp=r*0.14;var pp=(po*0.6+pr*0.8)*0.10;points=dp*d+pp;
      detail='发展积分: '+r+' x 14% x '+d+'(折扣系数) = '+(dp*d).toFixed(1)+'\n';
      detail+='回款积分: ('+po+'x0.6 + '+pr+'x0.8) x 10% = '+pp.toFixed(1)+'\n';
      if(vc('counter')){points=points*1.1;detail+='异网策反叠加10%: x 1.1\n';}
      var capped=false;if(points>8000){points=8000;capped=true;}
      detail+='合计: '+points.toFixed(1)+' 分'+(capped?' (已触达月封顶8000)':' (月封顶8000)');
      break;}
    case'fixed_line_renew':{
      var po=v('postPaid'),pr=v('prePaid'),d=v('discount')||1;
      points=(po*0.6+pr*0.8)*d*0.03;
      var capped=false;if(points>5000){points=5000;capped=true;}
      detail='计算: ('+po+'x0.6 + '+pr+'x0.8) x '+d+'(折扣系数) x 3% = '+points.toFixed(1)+' 分 (月封顶5000)'+(capped?' 已触达封顶':'');
      break;}
    case'fixed_broadband_new':{
      var r=v('rent'),pt=parseFloat(vs('payType'));points=r*1*pt;
      detail='计算: '+r+' x 1 x '+pt+'(趸交系数) = '+points.toFixed(1)+' 分';
      break;}
    case'fixed_broadband_renew':{
      var r=v('rent');points=r*0.05;
      detail='计算: '+r+' x 5% = '+points.toFixed(1)+' 分 (入网13-36个月)';
      break;}
    case'fixed_ftto':{
      var b=v('bill'),ver=vs('ver');
      if(ver==='lump50'){points=b*0.5;detail='趸交版: '+b+' x 50% = '+points.toFixed(1)+' 分\nT+1~T+6月一次性核发（首月出账需缴费且非停机）';}
      else{points=b*1.0;detail='分月版发展积分: '+b+' x 100% = '+points.toFixed(1)+' 分 (T+1月一次性核发)\n另计: 月出账x20%x12个月的出账积分（T+2月起）';}
      break;}
    case'fixed_ftto_new':{
      var b=v('bill'),ver=vs('ver');
      if(ver==='lump100'){points=b*1.0;detail='焕新趸交版: '+b+' x 100% = '+points.toFixed(1)+' 分';}
      else if(ver==='month'){points=b*1.0;detail='分月版发展积分: '+b+' x 100% = '+points.toFixed(1)+' 分\n另计: 月出账x20%x5个月的出账积分';}
      else if(ver==='l12'){points=100;detail='L版12期: 固定 100 分';}
      else{points=150;detail='L版24期: 固定 150 分';}
      break;}
    case'fixed_zhijia':{
      var c=v('count')||1;points=50*c;
      detail='计算: 50(固定积分) x '+c+'(户) = '+points.toFixed(1)+' 分 (T+1月一次性核发)';
      break;}
    case'fixed_voice_new':{
      var b=v('bill');points=Math.min(b*0.12,2000);
      detail='计算: '+b+' x 12% = '+(b*0.12).toFixed(1)+' 分 (封顶2000)\n实际: '+points.toFixed(1)+' 分';
      break;}
    case'fixed_voice_renew':{
      var b=v('bill');points=Math.min(b*0.05,1000);
      detail='计算: '+b+' x 5% = '+(b*0.05).toFixed(1)+' 分 (封顶1000)\n实际: '+points.toFixed(1)+' 分';
      break;}
    case'calc_std_high':{
      var a=v('amount'),t=parseFloat(vs('type'));var cap=t===7?5000:3000;
      points=Math.min(a*t/100,cap);
      detail='计算: '+a+' x '+t+'% = '+(a*t/100).toFixed(1)+' 分 (封顶'+cap+')\n实际: '+points.toFixed(1)+' 分';
      break;}
    case'calc_std_mid':{
      var a=v('amount'),t=parseFloat(vs('type'));var cap=t===5?3000:2000;
      points=Math.min(a*t/100,cap);
      detail='计算: '+a+' x '+t+'% = '+(a*t/100).toFixed(1)+' 分 (封顶'+cap+')\n实际: '+points.toFixed(1)+' 分';
      break;}
    case'calc_std_low':{
      var a=v('amount'),x=v('actualMargin'),sm=v('stdMargin')||20,t=vs('type');
      // 标准毛利率对应的每元积分(即标准毛利率档位的增量比例)
      var perYuan=sm>=20?0.07:0.05;
      var raw=(x/sm)*a*perYuan;
      if(t==='renew'){
        var cap=1000;points=Math.min(raw*0.5,cap);
        detail='实际毛利率'+x+'%, 标准毛利率'+sm+'%, 每元积分'+(perYuan*100).toFixed(0)+'%\n';
        detail+='增量积分: ('+x+'/'+sm+') x '+a+' x '+(perYuan*100).toFixed(0)+'% = '+raw.toFixed(1)+' 分\n';
        detail+='存量续费: '+raw.toFixed(1)+' x 50% = '+(raw*0.5).toFixed(1)+' 分 (封顶'+cap+')\n实际: '+points.toFixed(1)+' 分';
      }else{
        var cap=3000;points=Math.min(raw,cap);
        detail='实际毛利率'+x+'%, 标准毛利率'+sm+'%, 每元积分'+(perYuan*100).toFixed(0)+'%\n';
        detail+='计算: ('+x+'/'+sm+') x '+a+' x '+(perYuan*100).toFixed(0)+'% = '+raw.toFixed(1)+' 分 (封顶'+cap+')\n实际: '+points.toFixed(1)+' 分';
      }
      break;}
    case'calc_iot':{
      var a=v('amount'),t=parseFloat(vs('type'));var cap=t===7?5000:3000;
      points=Math.min(a*t/100,cap);
      detail='计算: '+a+' x '+t+'% = '+(a*t/100).toFixed(1)+' 分 (封顶'+cap+')\n实际: '+points.toFixed(1)+' 分';
      break;}
    case'calc_ict':{
      var a=v('amount');
      if(a>200){points=0;detail='计收金额 '+a+'万元 > 200万, 不参与积分核算';}
      else{var yuan=a*10000;points=Math.min(yuan/1000,10000);
      detail='计算: '+yuan+'元 / 1000 = '+(yuan/1000).toFixed(1)+' 分 (年封顶10000)';}
      break;}
    case'act_dkh':{
      var freq=v('visitFreq'),cov=v('visitCov'),opp=v('oppCount'),cust=v('custCount');
      var s1=Math.min(freq,16)/16*100;
      var s2=Math.min(cov,20)/20*50;
      var s3=Math.min(opp*20,100);
      var s4=Math.min(cust*10,50);
      points=s1+s2+s3+s4;
      detail='① 拜访频次: 100 x '+Math.min(freq,16)+'/16 = '+s1.toFixed(1)+' 分\n';
      detail+='② 拜访覆盖率: 50 x '+Math.min(cov,20)+'/20 = '+s2.toFixed(1)+' 分\n';
      detail+='③ 商机录入: '+opp+' x 20 = '+s3.toFixed(1)+' 分 (满分100)\n';
      detail+='④ 客户资料完整性: '+cust+' x 10 = '+s4.toFixed(1)+' 分 (满分50)\n';
      detail+='合计: '+points.toFixed(1)+' 分';
      break;}
    case'act_sq':{
      var vn=v('visitCount'),nc=v('newCust'),op=v('oppCount'),sg=v('signCount'),tc=v('toolCount');
      var e1=Math.min(vn,10)/10*100;
      var e2=Math.min(nc*5+op*10+sg*30,100);
      var e3=Math.min(tc,5)*20;
      points=e1+e2+e3;
      detail='① 客户拜访: 100 x '+Math.min(vn,10)+'/10 = '+e1.toFixed(1)+' 分\n';
      detail+='② 销售行为: 潜客'+nc+'x5 + 商机'+op+'x10 + 签约'+sg+'x30 = '+e2.toFixed(1)+' 分 (满分100)\n';
      detail+='③ 数字化工具: 登录'+tc+'次 x 20 = '+e3.toFixed(1)+' 分 (满分100)\n';
      detail+='合计: '+points.toFixed(1)+' 分';
      break;}
    case'act_xy':{
      var xn=v('visitCount'),sc=v('schoolCount'),ev=v('eventCount'),xo=v('oppCount');
      var f1=Math.min(xn,10)/10*100;
      var f2=Math.min(sc*50+ev*20,100);
      var f3=Math.min(xo*20,100);
      points=f1+f2+f3;
      detail='① 客户拜访: 100 x '+Math.min(xn,10)+'/10 = '+f1.toFixed(1)+' 分\n';
      detail+='② 营销动作: 圈校'+sc+'x50 + 营销'+ev+'x20 = '+f2.toFixed(1)+' 分 (满分100)\n';
      detail+='③ 商机录入: '+xo+' x 20 = '+f3.toFixed(1)+' 分 (满分100)\n';
      detail+='合计: '+points.toFixed(1)+' 分';
      break;}
  }
  document.getElementById('calcResult').style.display='block';
  document.getElementById('calcResultNum').textContent=points.toFixed(1);
  document.getElementById('calcDetail').textContent=detail;
  // 保存到历史
  saveToHistory(type,points.toFixed(1),detail);
}

// ===== 复制结果 =====
document.getElementById('copyResultBtn').addEventListener('click',function(){
  var type=document.getElementById('calcType');
  var typeLabel=type.options[type.selectedIndex]?type.options[type.selectedIndex].text:'';
  var points=document.getElementById('calcResultNum').textContent;
  var detail=document.getElementById('calcDetail').textContent;
  var text='【积分计算结果】\n业务类型: '+typeLabel+'\n预计积分: '+points+' 分\n\n'+detail+'\n\n(恩施联通政企积分查询系统)';
  var self=this;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      self.classList.add('copied');self.textContent='已复制';
      setTimeout(function(){self.classList.remove('copied');self.textContent='复制结果';},2000);
      showToast('已复制到剪贴板');
    }).catch(function(){fallbackCopy(text,self);});
  }else{fallbackCopy(text,self);}
});
function fallbackCopy(text,btn){
  var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');
    btn.classList.add('copied');btn.textContent='已复制';
    setTimeout(function(){btn.classList.remove('copied');btn.textContent='复制结果';},2000);
    showToast('已复制到剪贴板');
  }catch(e){showToast('复制失败,请手动选择复制');}
  document.body.removeChild(ta);
}

// ===== 清空历史 =====
document.getElementById('clearHistoryBtn').addEventListener('click',function(){
  try{localStorage.removeItem('calcHistory');}catch(e){}
  renderHistory();
  showToast('计算历史已清空');
});

// ===== 渲染渠道系数表 =====
function renderCoefficients(){
  var html='';
  APP_DATA.coefficients.forEach(function(c,i){
    html+='<tr><td>'+(i+1)+'</td><td>'+c.range+'</td><td><span class="coeff-val">'+c.coefficient+'</span></td></tr>';
  });
  document.getElementById('coeffTableBody').innerHTML=html;
}

// ===== 渠道积分计算 =====
// 依据 APP_DATA.coefficients 动态匹配分档，规则调整后无需改代码
function findCoeff(total){
  var list=APP_DATA.coefficients||[];
  for(var i=list.length-1;i>=0;i--){
    var n=(list[i].range||'').match(/[\d.]+/g);
    if(!n||!n.length)continue;
    if(total>=parseFloat(n[0]))return {coefficient:list[i].coefficient,range:list[i].range};
  }
  return list.length?{coefficient:list[0].coefficient,range:list[0].range}:{coefficient:1,range:'-'};
}
function coeffRangeText(r){return String(r).replace('∞','无穷');}
document.getElementById('coeffInput').addEventListener('input',debounce(calcChannelShare,600));
function calcChannelShare(){
  var input=parseFloat(document.getElementById('coeffInput').value);
  if(isNaN(input)||input<=0){document.getElementById('coeffResult').style.display='none';return;}
  var hit=findCoeff(input);
  var coeff=hit.coefficient,range=coeffRangeText(hit.range);
  var result=input*coeff;
  document.getElementById('coeffResult').style.display='block';
  document.getElementById('coeffResultNum').textContent=result.toFixed(1);
  document.getElementById('coeffDetail').textContent=
    '月度总积分 '+input+' 分, 对应分档 '+range+', 系数 '+coeff+'\n'+
    '渠道分享积分 = '+input+' x '+coeff+' = '+result.toFixed(1)+' 分';
}

// ===== 小助手 =====
var assistantOpen=false;
function toggleAssistant(open){
  var win=document.getElementById('assistantWindow');
  if(typeof open==='undefined')open=!win.classList.contains('open');
  win.classList.toggle('open',open);
  assistantOpen=open;
  if(open)setTimeout(function(){document.getElementById('assistantInput').focus();},100);
}
document.getElementById('assistantClose').addEventListener('click',function(){toggleAssistant(false);});
document.getElementById('assistantSend').addEventListener('click',function(){sendAssistantQuestion();});
document.getElementById('assistantInput').addEventListener('keydown',function(e){if(e.key==='Enter')sendAssistantQuestion();});
// 通用拖拽：区分点击与拖拽，拖拽时不触发点击
function makeDraggable(el,opts){
  opts=opts||{};
  var onDragStart=opts.onDragStart||function(){};
  var onClick=opts.onClick||function(){};
  var dragHandle=opts.handle||el;
  var dragging=false,startX=0,startY=0,origX=0,origY=0,moved=false;
  var DRAG_THRESHOLD=5;
  function getPoint(e){return e.touches&&e.touches[0]?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY};}
  function onStart(e){
    var pt=getPoint(e);startX=pt.x;startY=pt.y;moved=false;
    var rect=el.getBoundingClientRect();origX=rect.left;origY=rect.top;
    dragging=true;
    document.addEventListener('mousemove',onMove);
    document.addEventListener('mouseup',onEnd);
    document.addEventListener('touchmove',onMove,{passive:false});
    document.addEventListener('touchend',onEnd);
  }
  function onMove(e){
    if(!dragging)return;
    var pt=getPoint(e);
    var dx=pt.x-startX,dy=pt.y-startY;
    if(!moved&&Math.abs(dx)<DRAG_THRESHOLD&&Math.abs(dy)<DRAG_THRESHOLD)return;
    if(!moved){moved=true;el.classList.add('dragging');onDragStart();}
    if(e.cancelable)e.preventDefault();
    var nx=origX+dx,ny=origY+dy;
    // 边界约束
    var w=el.offsetWidth,h=el.offsetHeight;
    nx=Math.max(4,Math.min(nx,window.innerWidth-w-4));
    ny=Math.max(4,Math.min(ny,window.innerHeight-h-4));
    el.style.left=nx+'px';el.style.top=ny+'px';
    el.style.right='auto';el.style.bottom='auto';
  }
  function onEnd(){
    dragging=false;
    document.removeEventListener('mousemove',onMove);
    document.removeEventListener('mouseup',onEnd);
    document.removeEventListener('touchmove',onMove);
    document.removeEventListener('touchend',onEnd);
    el.classList.remove('dragging');
    // 未移动视为点击
    if(!moved){onClick();}
    moved=false;
  }
  dragHandle.addEventListener('mousedown',onStart);
  dragHandle.addEventListener('touchstart',onStart,{passive:false});
}
// 悬浮按钮：拖拽移动 + 点击打开
var floatBtn=document.getElementById('assistantFloat');
makeDraggable(floatBtn,{onClick:function(){toggleAssistant(true);}});
// 聊天窗口：通过 header 拖拽移动整个窗口
var winEl=document.getElementById('assistantWindow');
var headerEl=winEl.querySelector('.assistant-header');
makeDraggable(winEl,{handle:headerEl,onClick:function(){},onDragStart:function(){
  // 拖拽开始时把 right/bottom 转为 left/top
  if(winEl.style.left===''){var r=winEl.getBoundingClientRect();winEl.style.left=r.left+'px';winEl.style.top=r.top+'px';winEl.style.right='auto';winEl.style.bottom='auto';}
}});
document.getElementById('assistantQuick').addEventListener('click',function(e){
  var chip=e.target.closest('.assistant-quick-chip');
  if(chip){
    var q=chip.getAttribute('data-q');
    addAssistantMessage(q,true);
    answerAssistant(q);
  }
});
function addAssistantMessage(text,isUser){
  var body=document.getElementById('assistantBody');
  var html='<div class="assistant-msg '+(isUser?'user':'bot')+'">';
  if(!isUser)html+='<img src="assistant.png" class="assistant-msg-avatar" alt="">';
  html+='<div class="assistant-msg-bubble">'+escapeHtml(text)+'</div></div>';
  // 用临时div包装再取节点
  var wrap=document.createElement('div');wrap.innerHTML=html;
  var node=wrap.firstElementChild;
  body.appendChild(node);
  body.scrollTop=body.scrollHeight;
  return node;
}
function addAssistantHtml(htmlContent){
  var body=document.getElementById('assistantBody');
  var wrap=document.createElement('div');wrap.innerHTML=htmlContent;
  var node=wrap.firstElementChild;
  body.appendChild(node);
  body.scrollTop=body.scrollHeight;
  return node;
}
function sendAssistantQuestion(){
  var input=document.getElementById('assistantInput');
  var q=input.value.trim();
  if(!q)return;
  addAssistantMessage(q,true);
  input.value='';
  answerAssistant(q);
}
function answerAssistant(q){
  var text=q.toLowerCase().replace(/[？?。.,，!！]/g,'');
  var answer='';
  // 问候
  if(/^(你好|您好|嗨|hello|hi|在吗|在嘛)$/.test(text)){answer='你好呀！😊 有什么可以帮你的吗？可以输入产品名、业务类型，或者点击上方快捷问题~';}
  // 使用说明/怎么用
  else if(/(使用说明|怎么用|如何使用|不会用|教程|帮助)/.test(text)){
    answer='已为你打开「使用说明」页面，里面有详细的产品查询、积分规则、计算器和渠道系数使用教程。';
    switchTab('guide');
  }
  // 渠道系数
  else if(/(渠道|分享|系数)/.test(text)){
    answer='渠道分享系数按月度总积分分档，积分越高系数越低：\n';
    APP_DATA.coefficients.forEach(function(c,i){answer+=(i+1)+'. '+c.range+' → 系数 '+c.coefficient+'\n';});
    answer+='\n例如：月度总积分 3500 分，对应分档 [3000,4000)，系数 0.6，渠道分享积分 = 3500 × 0.6 = 2100 分。\n\n需要我打开渠道系数页面吗？';
  }
  // 计算器用法
  else if(/(计算器|怎么算|如何计算|算积分|积分计算)/.test(text)){
    answer='我可以帮你跳转到积分计算器~ 你也可以直接告诉我你要算什么业务，我帮你跳过去。';
    switchTab('calculator');
  }
  // 有哪些产品/列表
  else if(/(有哪些产品|产品列表|全部产品|所有产品|产品).*/.test(text)){
    var cats={};APP_DATA.products.forEach(function(p){cats[p.category]=(cats[p.category]||0)+1;});
    answer='目前系统共有 '+APP_DATA.products.length+' 个产品，分类如下：\n';
    Object.keys(cats).forEach(function(c){answer+='• '+catLabel(c)+'：'+cats[c]+' 个\n';});
    answer+='\n热门产品：'+APP_DATA.products.slice(0,5).map(function(p){return p.name;}).join('、')+' 等。\n\n你可以直接输入具体产品名称查询详情。';
  }
  // 积分规则总览
  else if(/(积分规则|规则|标准|细则)/.test(text)){
    var groups={};APP_DATA.rules.forEach(function(r){groups[r.business_type]=(groups[r.business_type]||0)+1;});
    answer='系统共收录 '+APP_DATA.rules.length+' 条积分规则，分为以下大类：\n';
    Object.keys(groups).forEach(function(g){answer+='• '+g+'：'+groups[g]+' 条\n';});
    answer+='\n告诉我具体业务类型（如「移网单卡」「专线新发展」），我可以把对应规则找出来。';
  }
  // 具体业务类型匹配规则
  else{
    // 尝试匹配规则
    var matchedRules=[];
    APP_DATA.rules.forEach(function(r){
      var score=0;
      var hay=(r.business_type+' '+r.business_subtype+' '+r.detail).toLowerCase();
      // 完全包含子类型
      if(hay.indexOf(text)!==-1)score+=10;
      // 关键词命中
      var keywords=text.split(/\s+/);
      keywords.forEach(function(k){if(k&&hay.indexOf(k)!==-1)score+=3;});
      if(score>0){matchedRules.push({rule:r,score:score});}
    });
    if(matchedRules.length>0){
      matchedRules.sort(function(a,b){return b.score-a.score;});
      var top=matchedRules.slice(0,3);
      answer='找到 '+matchedRules.length+' 条相关规则，为你展示最相关的 '+top.length+' 条：\n\n';
      top.forEach(function(item,idx){
        var r=item.rule;
        answer+=(idx+1)+'）'+r.business_subtype+'（'+r.detail+'）\n';
        answer+='积分标准：'+r.standard.replace(/\n/g,' ').substring(0,120)+(r.standard.length>120?'...':'')+'\n\n';
      });
      answer+='需要我跳转到「积分规则」页面查看完整内容吗？';
    }else{
      // 尝试匹配产品
      var matchedProducts=APP_DATA.products.filter(function(p){
        return p.name.toLowerCase().indexOf(text)!==-1||(p.product_code||'').toLowerCase().indexOf(text)!==-1;
      });
      if(matchedProducts.length>0){
        var p=matchedProducts[0];
        answer='找到产品：'+p.name+'\n';
        answer+='商品编码：'+(p.product_code||'-')+'\n';
        answer+('毛利率：'+p.margin_range+'\n');
        answer+='大类：'+catLabel(p.category)+'\n';
        answer+='积分规则：'+getPointsRuleForProduct(p)+'\n\n';
        if(matchedProducts.length>1){
          answer+='还找到 '+matchedProducts.length+' 个相关产品：'+matchedProducts.slice(1,4).map(function(x){return x.name;}).join('、')+(matchedProducts.length>4?' 等':'')+'。';
        }
        // 如果是标品，提供跳转
        var ct=getCalcTypeForProduct(p);
        if(ct){
          answer+='\n\n点击「去计算」可直接跳转计算器。';
          setTimeout(function(){
            switchTab('calculator');
            var sel=document.getElementById('calcType');
            for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ct){sel.selectedIndex=i;break;}}
            sel.classList.add('calc-preset');updateCalcForm();
            document.getElementById('productHint').style.display='flex';
            document.getElementById('productHintText').textContent='来自小助手推荐：'+p.name;
          },800);
        }
      }else{
        answer='抱歉，我没有找到与「'+q+'」完全匹配的产品或规则。\n\n你可以试试：\n• 输入产品名称（如云网关、联通云犀）\n• 输入业务类型（如移网单卡、专线新发展）\n• 输入「规则」「产品」「系数」「计算器」等关键词';
      }
    }
  }
  // 延迟一点显示，模拟思考
  setTimeout(function(){
    var node=addAssistantMessage(answer,false);
    // 如果answer包含「去计算」或相关操作，不额外处理，已通过switchTab完成
  },400);
}

// ===== 规则映射到计算器类型 =====
function getCalcTypeForRule(r){
  var bt=r.business_type||'';
  var sub=r.business_subtype||'';
  var det=r.detail||'';
  var t=bt+' '+sub+' '+det;
  var isA=bt.indexOf('A-')===0;
  var isB=bt.indexOf('B-')===0;
  var isC=bt.indexOf('C-')===0;

  // ---- C-算网业务 ----
  if(isC||t.indexOf('算网')!==-1){
    if(t.indexOf('ICT')!==-1)return 'calc_ict';
    if(t.indexOf('物联网')!==-1)return 'calc_iot';
    if(t.indexOf('＜10%')!==-1||t.indexOf('<10%')!==-1)return 'calc_std_low';
    if(t.indexOf('20%>X')!==-1)return 'calc_std_mid';
    if(t.indexOf('≥20%')!==-1)return 'calc_std_high';
    if(t.indexOf('标品')!==-1)return 'calc_std_high';
  }

  // ---- B-联网（固） ----
  if(isB||t.indexOf('联网（固）')!==-1){
    if(t.indexOf('智企光网')!==-1)return t.indexOf('焕新')!==-1?'fixed_ftto_new':'fixed_ftto';
    if(t.indexOf('专线')!==-1)return t.indexOf('续签')!==-1?'fixed_line_renew':'fixed_line_new';
    if(t.indexOf('宽带')!==-1)return t.indexOf('续费')!==-1?'fixed_broadband_renew':'fixed_broadband_new';
    if(t.indexOf('联通智家')!==-1)return 'fixed_zhijia';
    if(t.indexOf('语音中继')!==-1||t.indexOf('云讯通')!==-1||t.indexOf('固话')!==-1||sub.indexOf('语音')!==-1){
      return t.indexOf('续费')!==-1?'fixed_voice_renew':'fixed_voice_new';
    }
  }

  // ---- A-联网（移） ----
  if(isA||t.indexOf('联网（移）')!==-1){
    // 校园类需优先判断（其细分同时含"融合""移网单卡"等词）
    if(sub.indexOf('校园')!==-1){
      if(sub.indexOf('高价值')!==-1)return 'mobile_highvalue_school';
      if(sub.indexOf('融合')!==-1)return 'mobile_school_fusion';
      return 'mobile_school';
    }
    if(sub.indexOf('企业工作号')!==-1||sub.indexOf('联通魔方')!==-1)return 'mobile_enterprise_num';
    if(sub.indexOf('高价值')!==-1)return 'mobile_highvalue';
    if(sub.indexOf('移网单卡')!==-1)return 'mobile_single';
    if(det.indexOf('联通云犀')!==-1)return 'mobile_cloudxi';
    if(det.indexOf('随行专网')!==-1)return 'mobile_5g';
    if(det.indexOf('隐私工作号')!==-1||det.indexOf('工作号平台')!==-1)return 'mobile_worknum';
    if(sub.indexOf('语音')!==-1||sub.indexOf('流量包')!==-1||det.indexOf('语音包')!==-1||det.indexOf('流量包')!==-1)return 'mobile_voice';
    if(sub.indexOf('金融合约')!==-1||det.indexOf('金融合约')!==-1)return 'mobile_finance';
    if(sub.indexOf('价值经营')!==-1||det.indexOf('ARPU')!==-1)return 'mobile_value';
    if(sub.indexOf('融合')!==-1||det.indexOf('融合')!==-1)return 'mobile_fusion';
  }

  // ---- D/E/F 市场动作积分 ----
  if(bt.indexOf('D-')===0)return 'act_dkh';
  if(bt.indexOf('E-')===0)return 'act_sq';
  if(bt.indexOf('F-')===0)return 'act_xy';
  if(bt.indexOf('市场动作')!==-1){
    if(t.indexOf('要客')!==-1)return 'act_dkh';
    if(t.indexOf('商企')!==-1)return 'act_sq';
    if(t.indexOf('校园')!==-1)return 'act_xy';
  }

  // ---- 兜底（按关键词）----
  if(t.indexOf('联通智家')!==-1)return 'fixed_zhijia';
  if(t.indexOf('移网单卡')!==-1)return 'mobile_single';
  if(t.indexOf('融合')!==-1)return 'mobile_fusion';
  if(t.indexOf('宽带')!==-1&&t.indexOf('续费')!==-1)return 'fixed_broadband_renew';
  return '';
}

// ===== 深色模式 =====
function initTheme(){
  var saved=localStorage.getItem('theme');
  var prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;
  var theme=saved||(prefersDark?'dark':'light');
  applyTheme(theme);
}
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme',theme);
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=theme==='dark'?'☀️':'🌙';
  try{localStorage.setItem('theme',theme);}catch(e){}
}
document.getElementById('themeToggle').addEventListener('click',function(){
  var current=document.documentElement.getAttribute('data-theme')||'light';
  applyTheme(current==='dark'?'light':'dark');
});

// ===== 返回顶部 =====
var backTopBtn=document.getElementById('backTop');
window.addEventListener('scroll',function(){
  if(window.scrollY>300)backTopBtn.classList.add('show');
  else backTopBtn.classList.remove('show');
});
backTopBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});

// ===== 收藏夹 =====
function getFavorites(){
  try{return JSON.parse(localStorage.getItem('favorites')||'[]');}catch(e){return[];}
}
function isFavorite(id){return getFavorites().indexOf(id)!==-1;}
function toggleFavorite(id){
  var favs=getFavorites();
  var idx=favs.indexOf(id);
  if(idx!==-1)favs.splice(idx,1);
  else favs.push(id);
  try{localStorage.setItem('favorites',JSON.stringify(favs));}catch(e){}
  renderProducts();
  renderFavorites();
  showToast(isFavorite(id)?'已收藏':'已取消收藏');
}
function renderFavorites(){
  var favs=getFavorites();
  var section=document.getElementById('favSection');
  var chips=document.getElementById('favChips');
  if(favs.length===0){section.style.display='none';return;}
  section.style.display='block';
  var html='';
  favs.forEach(function(id){
    var p=APP_DATA.products.find(function(x){return x.id===id;});
    if(!p)return;
    html+='<div class="fav-chip" data-calc-type="'+getCalcTypeForProduct(p)+'" data-product-name="'+escapeHtml(p.name)+'">';
    html+=escapeHtml(p.name);
    html+='<span class="fav-remove" onclick="event.stopPropagation();toggleFavorite('+p.id+')">✕</span>';
    html+='</div>';
  });
  chips.innerHTML=html;
  // 收藏chip点击跳转计算器
  chips.querySelectorAll('.fav-chip').forEach(function(chip){
    chip.addEventListener('click',function(e){
      if(e.target.classList.contains('fav-remove'))return;
      var ct=this.getAttribute('data-calc-type');
      var pName=this.getAttribute('data-product-name');
      if(ct){
        switchTab('calculator');
        var sel=document.getElementById('calcType');
        for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ct){sel.selectedIndex=i;break;}}
        sel.classList.add('calc-preset');updateCalcForm();
        var hint=document.getElementById('productHint');
        document.getElementById('productHintText').textContent='当前产品：'+pName;
        hint.style.display='flex';
        showToast('已选择「'+pName+'」，跳转积分计算器');
      }else{
        switchTab('products');
        document.getElementById('productSearch').value=pName;
        renderProducts();
      }
    });
  });
}

// ===== 产品对比 =====
var compareList=[];
var CMP_MAX=4;
var cmpFilterValue='';
var cmpScrollTop=0;
function toggleCompare(id,checked){
  if(checked){
    if(compareList.length>=CMP_MAX){showToast('最多对比'+CMP_MAX+'个产品');renderProducts();return;}
    if(compareList.indexOf(id)===-1)compareList.push(id);
  }else{
    var idx=compareList.indexOf(id);
    if(idx!==-1)compareList.splice(idx,1);
  }
  renderCompareBar();
  updateCompareBadge();
  if(document.getElementById('comparePanel').classList.contains('show'))renderComparePanel();
}
function updateCompareBadge(){
  var badge=document.getElementById('coBadge');
  if(badge)badge.textContent=compareList.length;
}
function renderCompareBar(){
  var bar=document.getElementById('compareBar');
  var count=document.getElementById('compareCount');
  var btn=document.getElementById('compareBtn');
  count.textContent='已选 '+compareList.length+' 个产品';
  btn.disabled=compareList.length<2;
  bar.classList.toggle('show',compareList.length>0);
}
function openComparePanel(){
  document.getElementById('comparePanel').classList.add('show');
  renderComparePanel();
}
function renderComparePanel(){
  var body=document.getElementById('cmpBody');
  if(compareList.length===0){
    body.innerHTML='<div class="cmp-empty">'+
      '<div class="cmp-empty-icon">⚖</div>'+
      '<div class="cmp-empty-title">还没有选择对比产品</div>'+
      '<div class="cmp-empty-desc">在下方列表中勾选产品即可添加到对比，也可用筛选框快速定位。<br>支持同时对比 2-'+CMP_MAX+' 个产品的关键属性，差异自动高亮标黄。</div>'+
      '</div>';
    renderCmpPicker(body);
    return;
  }
  // Slots
  var slotsHtml='<div class="cmp-picker"><div class="cmp-picker-label">已选产品（'+compareList.length+'/'+CMP_MAX+'）</div><div class="cmp-slots">';
  for(var i=0;i<CMP_MAX;i++){
    if(i<compareList.length){
      var p=APP_DATA.products.find(function(x){return x.id===compareList[i];});
      if(p){
        var catClass=catCls(p.category);
        var marginClass=marginMap[p.margin_range]||'';
        slotsHtml+='<div class="cmp-slot filled">';
        slotsHtml+='<div class="cmp-slot-remove" onclick="cmpRemove('+p.id+')">✕</div>';
        slotsHtml+='<div class="cmp-slot-name">'+escapeHtml(p.name)+'</div>';
        slotsHtml+='<span class="cmp-slot-cat cat-badge '+catClass+'">'+catLabel(p.category)+'</span>';
        slotsHtml+='<div class="cmp-slot-margin">毛利率: <span class="margin-badge '+marginClass+'" title="'+escapeHtml(marginTitle(p))+'">'+escapeHtml(marginLabel(p))+'</span></div>';
        slotsHtml+='</div>';
      }
    }else{
      slotsHtml+='<div class="cmp-slot empty" onclick="focusCmpPicker()"><div class="cmp-slot-num">+</div><div>添加产品</div></div>';
    }
  }
  slotsHtml+='</div></div>';
  // Comparison table
  var rows=[
    {label:'大类',key:'category',map:true,type:'cat'},
    {label:'毛利率',key:'margin_range',type:'margin'},
    {label:'商品编码',key:'product_code'},
    {label:'取数分组',key:'block'},
    {label:'积分规则',key:'_rule'},
    {label:'可计算',key:'_calc',type:'calc'}
  ];
  // Pre-compute values to detect differences
  var rowData=[];
  rows.forEach(function(row){
    var vals=compareList.map(function(id){
      var p=APP_DATA.products.find(function(x){return x.id===id;});
      if(!p)return '-';
      if(row.key==='_rule')return getPointsRuleForProduct(p);
      if(row.key==='_calc'){var ct=getCalcTypeForProduct(p);return ct?'✓ 支持':'— 无';}
      if(row.key==='margin_range')return marginLabel(p);
      return row.map?(catLabel(p[row.key])||'-'):(p[row.key]||'-');
    });
    var allSame=vals.every(function(v){return v===vals[0];});
    rowData.push({row:row,vals:vals,diff:!allSame});
  });
  var tableHtml='<div class="cmp-table-wrap"><table class="cmp-table"><thead><tr><th>属性</th>';
  compareList.forEach(function(id){
    var p=APP_DATA.products.find(function(x){return x.id===id;});
    tableHtml+='<th>'+(p?escapeHtml(p.name):'-')+'</th>';
  });
  tableHtml+='</tr></thead><tbody>';
  rowData.forEach(function(rd){
    tableHtml+='<tr>';
    tableHtml+='<td'+(rd.diff?' class="cmp-diff"':'')+'>'+rd.row.label+(rd.diff?' <span style="color:var(--unicom-red);font-size:11px;">⚡差异</span>':'')+'</td>';
    rd.vals.forEach(function(val,idx){
      var p=APP_DATA.products.find(function(x){return x.id===compareList[idx];});
      var cellContent=val;
      if(rd.row.type==='cat'&&p){
        var catClass=catCls(p.category);
        cellContent='<span class="cat-badge '+catClass+'">'+val+'</span>';
      }else if(rd.row.type==='margin'&&p){
        var marginClass=marginMap[p.margin_range]||'';
        cellContent='<span class="margin-badge '+marginClass+'" title="'+escapeHtml(marginTitle(p))+'">'+escapeHtml(val)+'</span>';
      }else if(rd.row.type==='calc'){
        cellContent=val.indexOf('✓')!==-1?'<span style="color:#2e7d32;font-weight:600;">'+val+'</span>':'<span style="color:#999;">'+val+'</span>';
      }
      tableHtml+='<td'+(rd.diff?' class="cmp-diff"':'')+'>'+cellContent+'</td>';
    });
    tableHtml+='</tr>';
  });
  tableHtml+='</tbody></table></div>';
  body.innerHTML=slotsHtml+tableHtml;
  renderCmpPicker(body);
}
function renderCmpPicker(parent){
  var maxed=compareList.length>=CMP_MAX;
  var pickerHtml='<div class="cmp-picker" style="margin-top:20px;">';
  pickerHtml+='<div class="cmp-picker-label">📋 选择产品添加到对比'+(maxed?' <span style="color:var(--unicom-red);font-size:12px;">（已达上限 '+CMP_MAX+' 个）</span>':'')+'</div>';
  pickerHtml+='<div class="cmp-search-wrap">';
  pickerHtml+='<span class="cmp-search-icon">🔍</span>';
  pickerHtml+='<input type="text" class="cmp-search" id="cmpFilter" placeholder="输入关键词筛选产品..." '+(maxed?'disabled':'')+'>';
  pickerHtml+='</div>';
  pickerHtml+='<div class="cmp-list-scroll" id="cmpListScroll"></div>';
  pickerHtml+='</div>';
  parent.insertAdjacentHTML('beforeend',pickerHtml);
  var filterInput=document.getElementById('cmpFilter');
  if(filterInput){
    filterInput.value=cmpFilterValue;
    filterInput.addEventListener('input',function(){
      cmpFilterValue=this.value;
      cmpScrollTop=0;
      renderCmpList(this.value.trim());
    });
  }
  renderCmpList(cmpFilterValue);
  var scrollEl=document.getElementById('cmpListScroll');
  if(scrollEl)scrollEl.scrollTop=cmpScrollTop;
}
function renderCmpList(keyword){
  var scroll=document.getElementById('cmpListScroll');
  if(!scroll)return;
  var kw=(keyword||'').trim().toLowerCase();
  var maxed=compareList.length>=CMP_MAX;
  var groups={};
  var order=[];
  APP_DATA.products.forEach(function(p){
    if(kw){
      var kwOrig=keyword||'';
      var match=p.name.toLowerCase().indexOf(kw)!==-1||
        (p.product_code||'').toLowerCase().indexOf(kw)!==-1||
        productBlock(p).toLowerCase().indexOf(kw)!==-1||
        matchPinyin(p.name,kwOrig);
      if(!match)return;
    }
    var cat=p.category||'其他';
    if(!groups[cat]){groups[cat]=[];order.push(cat);}
    groups[cat].push(p);
  });
  if(order.length===0){
    scroll.innerHTML='<div class="cmp-list-empty">没有匹配「'+escapeHtml(keyword||'')+'」的产品</div>';
    return;
  }
  var html='';
  order.forEach(function(cat){
    var catName=catLabel(cat);
    var catClass=catCls(cat);
    html+='<div class="cmp-cat-group">';
    html+='<div class="cmp-cat-header"><span class="cat-badge '+catClass+'" style="font-size:11px;">'+catName+'</span><span class="cmp-cat-count">'+groups[cat].length+' 个产品</span></div>';
    groups[cat].forEach(function(p){
      var selected=compareList.indexOf(p.id)!==-1;
      var disabled=!selected&&maxed;
      html+='<div class="cmp-list-item'+(selected?' selected':'')+(disabled?' disabled':'')+'" data-cmp-pid="'+p.id+'">';
      html+='<input type="checkbox" class="cmp-list-cb" '+(selected?'checked':'')+(disabled?' disabled':'')+'>';
      html+='<div class="cmp-list-info"><div class="cmp-list-name">'+escapeHtml(p.name)+'</div>';
      html+='<div class="cmp-list-code">'+(p.product_code||'—')+'</div></div>';
      html+='</div>';
    });
    html+='</div>';
  });
  scroll.innerHTML=html;
  scroll.querySelectorAll('.cmp-list-item').forEach(function(item){
    item.addEventListener('click',function(e){
      if(this.classList.contains('disabled')){e.preventDefault();return;}
      var pid=parseInt(this.getAttribute('data-cmp-pid'));
      var idx=compareList.indexOf(pid);
      // Save scroll position before re-render
      var scrollEl=document.getElementById('cmpListScroll');
      if(scrollEl)cmpScrollTop=scrollEl.scrollTop;
      if(idx!==-1){
        var p=APP_DATA.products.find(function(x){return x.id===pid;});
        compareList.splice(idx,1);
        renderCompareBar();
        updateCompareBadge();
        renderProducts();
        renderComparePanel();
        if(p)showToast('已移除「'+p.name+'」');
      }else if(compareList.length<CMP_MAX){
        compareList.push(pid);
        renderCompareBar();
        updateCompareBadge();
        renderProducts();
        renderComparePanel();
        var p=APP_DATA.products.find(function(x){return x.id===pid;});
        if(p)showToast('已添加「'+p.name+'」到对比');
      }
    });
  });
}
function focusCmpPicker(){
  var scrollEl=document.getElementById('cmpListScroll');
  var filterInput=document.getElementById('cmpFilter');
  if(scrollEl){
    scrollEl.scrollIntoView({behavior:'smooth',block:'center'});
    scrollEl.classList.add('cmp-picker-pulse');
    setTimeout(function(){scrollEl.classList.remove('cmp-picker-pulse');},1200);
  }
  if(filterInput){
    setTimeout(function(){filterInput.focus();},300);
  }
}
function cmpRemove(id){
  var idx=compareList.indexOf(id);
  if(idx!==-1){
    var p=APP_DATA.products.find(function(x){return x.id===id;});
    compareList.splice(idx,1);
    renderCompareBar();
    updateCompareBadge();
    renderProducts();
    renderComparePanel();
    if(p)showToast('已移除「'+p.name+'」');
  }
}
document.getElementById('compareOpenBtn').addEventListener('click',openComparePanel);
document.getElementById('compareBtn').addEventListener('click',openComparePanel);
document.getElementById('compareClearBtn').addEventListener('click',function(){
  compareList=[];renderCompareBar();updateCompareBadge();renderProducts();renderComparePanel();
});
document.getElementById('comparePanelClose').addEventListener('click',function(){
  document.getElementById('comparePanel').classList.remove('show');
});
document.getElementById('comparePanel').addEventListener('click',function(e){
  if(e.target===this)this.classList.remove('show');
});

// ===== 搜索联想 =====
var acList=document.getElementById('autocompleteList');
document.getElementById('productSearch').addEventListener('input',debounce(function(){
  var kw=this.value.trim().toLowerCase();
  if(!kw){acList.classList.remove('show');return;}
  var kwOrig=this.value.trim();
  var matches=APP_DATA.products.filter(function(p){
    return p.name.toLowerCase().indexOf(kw)!==-1||
           (p.product_code||'').toLowerCase().indexOf(kw)!==-1||
           productBlock(p).toLowerCase().indexOf(kw)!==-1||
           matchPinyin(p.name,kwOrig);
  }).slice(0,8);
  if(matches.length===0){acList.classList.remove('show');return;}
  var html='';
  matches.forEach(function(p){
    html+='<div class="autocomplete-item" data-pid="'+p.id+'">';
    html+='<span class="ac-name">'+highlight(p.name,this.value.trim())+'</span>';
    html+='<span class="ac-cat">'+catLabel(p.category)+'</span>';
    html+='</div>';
  }.bind(this));
  acList.innerHTML=html;
  acList.classList.add('show');
  acList.querySelectorAll('.autocomplete-item').forEach(function(item){
    item.addEventListener('click',function(){
      var pid=parseInt(this.getAttribute('data-pid'));
      var p=APP_DATA.products.find(function(x){return x.id===pid;});
      if(p){
        document.getElementById('productSearch').value=p.name;
        acList.classList.remove('show');
        renderProducts();
        var ct=getCalcTypeForProduct(p);
        if(ct){
          switchTab('calculator');
          var sel=document.getElementById('calcType');
          for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===ct){sel.selectedIndex=i;break;}}
          sel.classList.add('calc-preset');updateCalcForm();
          var hint=document.getElementById('productHint');
          document.getElementById('productHintText').textContent='当前产品：'+p.name;
          hint.style.display='flex';
        }
      }
    });
  });
},200));
document.getElementById('productSearch').addEventListener('blur',function(){
  setTimeout(function(){acList.classList.remove('show');},200);
});

// ===== 导出计算历史 =====
document.getElementById('exportHistoryBtn').addEventListener('click',function(){
  try{
    var history=JSON.parse(localStorage.getItem('calcHistory')||'[]');
    if(history.length===0){showToast('暂无计算历史可导出');return;}
    var csv='\uFEFF业务类型,预计积分(分),计算过程,计算时间\n';
    history.forEach(function(h){
      csv+='"'+(h.typeLabel||'').replace(/"/g,'""')+'",';
      csv+='"'+(h.points||'')+'",';
      csv+='"'+(h.detail||'').replace(/"/g,'""').replace(/\n/g,' ')+'",';
      csv+='"'+(h.time||'')+'"\n';
    });
    var blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
    var link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download='积分计算历史_'+new Date().toLocaleDateString('zh-CN').replace(/\//g,'')+'.csv';
    document.body.appendChild(link);link.click();document.body.removeChild(link);
    showToast('已导出 '+history.length+' 条记录');
  }catch(e){showToast('导出失败');}
});

// ===== 键盘快捷键 =====
document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
  if(e.key==='/'){
    e.preventDefault();
    var activeTab=document.querySelector('.tab-content.active');
    var search=activeTab?activeTab.querySelector('.search-input'):null;
    if(search){search.focus();}
    else{switchTab('products');setTimeout(function(){document.getElementById('productSearch').focus();},100);}
    showKbdHint('/ 聚焦搜索');
  }
  if(e.key==='Escape'){
    document.getElementById('comparePanel').classList.remove('show');
    document.getElementById('assistantWindow').classList.remove('open');
    acList.classList.remove('show');
  }
  var numKey=parseInt(e.key);
  if(numKey>=1&&numKey<=6){
    var tabs=['products','rules','calculator','coefficient','simulator','guide'];
    if(tabs[numKey-1])switchTab(tabs[numKey-1]);
  }
});
function showKbdHint(msg){
  var hint=document.getElementById('kbdHint');
  hint.textContent=msg;
  hint.classList.add('show');
  setTimeout(function(){hint.classList.remove('show');},1500);
}

// ===== 月度积分模拟器 =====
function calcSimulator(){
  function sv(id){var el=document.getElementById(id);return el&&el.value?parseFloat(el.value)||0:0;}
  var mobileRent=sv('sim_mobile_rent');
  var fusionRent=sv('sim_fusion_rent');
  var schoolRent=sv('sim_school_rent');
  var entnumRent=sv('sim_entnum_rent');
  var hvRent=sv('sim_hv_rent');
  var voiceRent=sv('sim_voice_rent');
  var lineRent=sv('sim_line_rent');
  var bbRent=sv('sim_bb_rent');
  var voiceFixed=sv('sim_voice_fixed');
  var stdAmount=sv('sim_std_amount');
  var iotAmount=sv('sim_iot_amount');
  var ictAmount=sv('sim_ict_amount');
  var hasInput=mobileRent||fusionRent||schoolRent||entnumRent||hvRent||voiceRent||lineRent||bbRent||voiceFixed||stdAmount||iotAmount||ictAmount;
  if(!hasInput){document.getElementById('simSummary').style.display='none';document.getElementById('simChartWrap').style.display='none';return;}
  var detail='';
  var total=0;
  var chartData=[];
  function addChart(label,points,color){
    if(points>0)chartData.push({label:label,points:points,color:color});
  }
  if(mobileRent){var p=mobileRent*0.8;total+=p;detail+='移网单卡: '+mobileRent+' x 0.8(非异网) x 1(首缴) = '+p.toFixed(1)+'\n';addChart('移网单卡',p,'#E60012');}
  if(fusionRent){var p=fusionRent*1.2*0.8;total+=p;detail+='融合业务: '+fusionRent+' x 1.2(新移+新宽) x 0.8 = '+p.toFixed(1)+'\n';addChart('融合业务',p,'#0072CE');}
  if(schoolRent){var p=schoolRent*1.2*1;total+=p;detail+='校园融合: '+schoolRent+' x 1.2(新移+新宽) x 1(均势校区) = '+p.toFixed(1)+'\n';addChart('校园融合',p,'#0d47a1');}
  if(entnumRent){var p=entnumRent*0.8*1;total+=p;detail+='企业工作号/联通魔方: '+entnumRent+' x 0.8(非异网) x 1(无专项系数) = '+p.toFixed(1)+'\n';addChart('企业工作号',p,'#00695c');}
  if(hvRent){var p=hvRent*0.2;total+=p;detail+='高价值移网在网积分: '+hvRent+' x 0.2 = '+p.toFixed(1)+'\n';addChart('高价值在网',p,'#ad1457');}
  if(voiceRent){var p=voiceRent*1;total+=p;detail+='语音/流量包: '+voiceRent+' x 1 = '+p.toFixed(1)+'\n';addChart('语音/流量包',p,'#00bcd4');}
  if(lineRent){var raw=lineRent*0.14;var p=Math.min(raw,8000);total+=p;detail+='专线发展: '+lineRent+' x 14% = '+raw.toFixed(1)+(raw>8000?' (封顶8000)':'')+'\n';addChart('专线发展',p,'#7b1fa2');}
  if(bbRent){var p=bbRent*0.8;total+=p;detail+='单宽发展: '+bbRent+' x 0.8(非趸交) = '+p.toFixed(1)+'\n';addChart('单宽发展',p,'#9c27b0');}
  if(voiceFixed){var raw=voiceFixed*0.12;var p=Math.min(raw,2000);total+=p;detail+='固话发展: '+voiceFixed+' x 12% = '+raw.toFixed(1)+(raw>2000?' (封顶2000)':'')+'\n';addChart('固话发展',p,'#3f51b5');}
  if(stdAmount){var raw=stdAmount*0.07;var p=Math.min(raw,5000);total+=p;detail+='标品(毛利≥20%,增量): '+stdAmount+' x 7% = '+raw.toFixed(1)+(raw>5000?' (封顶5000)':'')+'\n';addChart('标品(≥20%)',p,'#2e7d32');}
  if(iotAmount){var raw=iotAmount*0.07;var p=Math.min(raw,5000);total+=p;detail+='物联网(增量): '+iotAmount+' x 7% = '+raw.toFixed(1)+(raw>5000?' (封顶5000)':'')+'\n';addChart('物联网',p,'#4caf50');}
  if(ictAmount){
    if(ictAmount>200){detail+='ICT('+ictAmount+'万): 超200万不参与核算\n';}
    else{var yuan=ictAmount*10000;var p=Math.min(yuan/1000,10000);total+=p;detail+='ICT: '+yuan+'元 / 1000 = '+p.toFixed(1)+'\n';addChart('ICT',p,'#ff9800');}
  }
  detail+='\n预估月度总积分: '+total.toFixed(1)+' 分';
  document.getElementById('simSummary').style.display='block';
  document.getElementById('simTotalPoints').textContent=total.toFixed(1);
  document.getElementById('simDetail').textContent=detail;
  // 渲染饼图
  renderSimChart(chartData,total);
  // 渠道分享积分
  var hit=findCoeff(total);
  var coeff=hit.coefficient,range=coeffRangeText(hit.range);
  var channelPoints=total*coeff;
  var cr=document.getElementById('simChannelResult');
  cr.style.display='block';
  document.getElementById('simChannelNum').textContent=channelPoints.toFixed(1);
  cr.querySelector('.sim-summary-label').textContent='渠道分享积分 (分档'+range+', 系数'+coeff+')';
}

// ===== 模拟器饼图 =====
function renderSimChart(data,total){
  var wrap=document.getElementById('simChartWrap');
  var svg=document.getElementById('simChart');
  if(!wrap||!svg)return;
  if(data.length===0){wrap.style.display='none';return;}
  wrap.style.display='block';
  var w=680,h=280,cx=110,cy=140,r=90;
  var svgHtml='';
  // 饼图
  var startAngle=-Math.PI/2;
  data.forEach(function(d,i){
    var angle=(d.points/total)*Math.PI*2;
    var endAngle=startAngle+angle;
    var x1=cx+r*Math.cos(startAngle),y1=cy+r*Math.sin(startAngle);
    var x2=cx+r*Math.cos(endAngle),y2=cy+r*Math.sin(endAngle);
    var largeArc=angle>Math.PI?1:0;
    if(data.length===1){
      svgHtml+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+d.color+'" opacity="0.85"/>';
    }else{
      svgHtml+='<path d="M '+cx+' '+cy+' L '+x1.toFixed(1)+' '+y1.toFixed(1)+' A '+r+' '+r+' 0 '+largeArc+' 1 '+x2.toFixed(1)+' '+y2.toFixed(1)+' Z" fill="'+d.color+'" opacity="0.85" stroke="#fff" stroke-width="2" style="cursor:pointer" data-idx="'+i+'"/>';
    }
    startAngle=endAngle;
  });
  // 中心文字
  svgHtml+='<circle cx="'+cx+'" cy="'+cy+'" r="42" fill="#fff"/>';
  svgHtml+='<text x="'+cx+'" y="'+(cy-4)+'" text-anchor="middle" font-size="18" font-weight="800" fill="#E60012">'+total.toFixed(0)+'</text>';
  svgHtml+='<text x="'+cx+'" y="'+(cy+14)+'" text-anchor="middle" font-size="10" fill="#999">总积分</text>';
  // 图例
  var legendX=250,legendY=30;
  data.forEach(function(d,i){
    var ly=legendY+i*26;
    svgHtml+='<rect x="'+legendX+'" y="'+ly+'" width="14" height="14" rx="3" fill="'+d.color+'"/>';
    svgHtml+='<text x="'+(legendX+22)+'" y="'+(ly+12)+'" font-size="12" fill="#333">'+escapeHtml(d.label)+'</text>';
    var pct=(d.points/total*100).toFixed(1);
    svgHtml+='<text x="'+(legendX+130)+'" y="'+(ly+12)+'" font-size="12" fill="#E60012" font-weight="600">'+d.points.toFixed(1)+'分 ('+pct+'%)</text>';
  });
  svg.innerHTML=svgHtml;
  // hover效果
  svg.querySelectorAll('path[data-idx]').forEach(function(path){
    path.addEventListener('mouseenter',function(){
      this.setAttribute('opacity','1');
      this.setAttribute('stroke-width','3');
    });
    path.addEventListener('mouseleave',function(){
      this.setAttribute('opacity','0.85');
      this.setAttribute('stroke-width','2');
    });
  });
}

// ===== 快捷功能入口 =====
document.querySelectorAll('.quick-card[data-quick-tab]').forEach(function(card){
  card.addEventListener('click',function(){
    switchTab(this.getAttribute('data-quick-tab'));
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
document.getElementById('quickCompareBtn').addEventListener('click',function(){
  if(typeof openComparePanel==='function'){openComparePanel();}
  else{switchTab('products');setTimeout(function(){var bar=document.querySelector('.compare-bar');if(bar)bar.scrollIntoView({behavior:'smooth'});},100);}
});

// ===== 渠道系数可视化图表 =====
function renderCoeffChart(){
  var svg=document.getElementById('coeffChart');
  if(!svg)return;
  var data=APP_DATA.coefficients;
  var w=680,h=280,padL=50,padR=30,padT=30,padB=50;
  var chartW=w-padL-padR,chartH=h-padT-padB;
  var maxCoeff=0.9,minCoeff=0.1;
  var maxRange=data.length;
  var points=[];
  data.forEach(function(d,i){
    var x=padL+(chartW/(data.length-1))*i;
    var y=padT+chartH-((d.coefficient-minCoeff)/(maxCoeff-minCoeff))*chartH;
    points.push({x:x,y:y,val:d.coefficient,range:d.range,idx:i});
  });
  var svgHtml='';
  // Grid lines
  for(var g=0;g<=4;g++){
    var gy=padT+(chartH/4)*g;
    var gv=(maxCoeff-(maxCoeff-minCoeff)*g/4).toFixed(1);
    svgHtml+='<line x1="'+padL+'" y1="'+gy+'" x2="'+(w-padR)+'" y2="'+gy+'" stroke="#eee" stroke-width="1"/>';
    svgHtml+='<text x="'+(padL-8)+'" y="'+(gy+4)+'" text-anchor="end" font-size="10" fill="#999">'+gv+'</text>';
  }
  // Axis labels
  svgHtml+='<text x="'+(padL+chartW/2)+'" y="'+(h-8)+'" text-anchor="middle" font-size="11" fill="#888">月度积分分档（低→高）</text>';
  svgHtml+='<text x="14" y="'+(padT+chartH/2)+'" text-anchor="middle" font-size="11" fill="#888" transform="rotate(-90 14 '+(padT+chartH/2)+')">分享系数</text>';
  // Area under curve
  var areaPath='M '+points[0].x+' '+(padT+chartH)+' L ';
  points.forEach(function(p){areaPath+=p.x+' '+p.y+' L ';});
  areaPath+=points[points.length-1].x+' '+(padT+chartH)+' Z';
  svgHtml+='<path d="'+areaPath+'" fill="url(#coeffGrad)" opacity="0.15"/>';
  svgHtml+='<defs><linearGradient id="coeffGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E60012"/><stop offset="100%" stop-color="#E60012" stop-opacity="0"/></linearGradient></defs>';
  // Line
  var linePath='M ';
  points.forEach(function(p){linePath+=p.x+' '+p.y+' L ';});
  linePath=linePath.slice(0,-3);
  svgHtml+='<path d="'+linePath+'" fill="none" stroke="#E60012" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
  // Points
  points.forEach(function(p){
    svgHtml+='<circle cx="'+p.x+'" cy="'+p.y+'" r="4" fill="#fff" stroke="#E60012" stroke-width="2" class="coeff-pt" data-idx="'+p.idx+'" style="cursor:pointer"/>';
    svgHtml+='<text x="'+p.x+'" y="'+(p.y-12)+'" text-anchor="middle" font-size="9" fill="#E60012" font-weight="700">'+p.val+'</text>';
  });
  // X-axis labels (every other)
  data.forEach(function(d,i){
    if(i%2===0||i===data.length-1){
      var x=padL+(chartW/(data.length-1))*i;
      svgHtml+='<text x="'+x+'" y="'+(h-padB+16)+'" text-anchor="middle" font-size="9" fill="#999">'+d.range.replace(/[()\[\]]/g,'')+'</text>';
    }
  });
  svg.innerHTML=svgHtml;
  // Hover interaction
  svg.querySelectorAll('.coeff-pt').forEach(function(pt){
    pt.addEventListener('mouseenter',function(){
      this.setAttribute('r','6');
    });
    pt.addEventListener('mouseleave',function(){
      this.setAttribute('r','4');
    });
  });
}

// ===== 积分公式速查卡 =====
function renderFormulaCard(){
  var body=document.getElementById('formulaBody');
  if(!body)return;
  var formulas=[
    {cat:'A',tag:'移网单卡',color:'#e3f2fd',txt:'#1565c0',formula:'实际月租 × 异网系数(0.8/1.2) × 首缴系数(0/1) × 渠道分享系数'},
    {cat:'A',tag:'企业工作号/联通魔方',color:'#e3f2fd',txt:'#1565c0',formula:'实际月租 × 异网系数 × 首缴系数 × 专项系数(2/1.5/1.1)'},
    {cat:'A',tag:'移网单卡(校园)',color:'#e3f2fd',txt:'#1565c0',formula:'产品套餐月租 × 异网系数 × 首缴系数(1倍月租) × 校区系数(0.9/1/1.2)'},
    {cat:'A',tag:'融合业务',color:'#e3f2fd',txt:'#1565c0',formula:'新移+新宽: 主套餐实际月费×1.2; 新移+老宽/老移+新宽: ×1 或 ×0.5'},
    {cat:'A',tag:'校园融合',color:'#e3f2fd',txt:'#1565c0',formula:'融合主套餐实际月费 × 1.2(或1/0.5) × 校区系数'},
    {cat:'A',tag:'2B/2B2C金融合约',color:'#e3f2fd',txt:'#1565c0',formula:'移网标准分值 × 2'},
    {cat:'A',tag:'语音/流量包',color:'#e3f2fd',txt:'#1565c0',formula:'生效当月实际月租 × 1（需≥10元，6个月1次）'},
    {cat:'A',tag:'联通云犀',color:'#e3f2fd',txt:'#1565c0',formula:'订购的云犀包月费 × 1（6个月1次）'},
    {cat:'A',tag:'5G随行专网',color:'#e3f2fd',txt:'#1565c0',formula:'随行专网包月费 × 1'},
    {cat:'A',tag:'隐私工作号',color:'#e3f2fd',txt:'#1565c0',formula:'工作号平台月租 × 1 × 项目号码数（月租≥25元）'},
    {cat:'A',tag:'高价值移网(在网)',color:'#e3f2fd',txt:'#1565c0',formula:'T+6~T+15月: 净月费 × 0.2（入网月租[39,129)）/ × 0.5（[129,∞)）'},
    {cat:'A',tag:'高价值移网(校园)',color:'#e3f2fd',txt:'#1565c0',formula:'T+6~T+15月: 净月费 × 0.2 × 校区系数'},
    {cat:'A',tag:'价值经营',color:'#e3f2fd',txt:'#1565c0',formula:'剔除优惠后提升差值 × 倍数(2/2.5/3)，T+4月核算'},
    {cat:'B',tag:'专线新发展',color:'#f3e5f5',txt:'#7b1fa2',formula:'发展积分=月租×14% + 回款积分=(后付×0.6+预付×0.8)×10%，月封顶8000'},
    {cat:'B',tag:'专线存量续签',color:'#f3e5f5',txt:'#7b1fa2',formula:'(后付×0.6+预付×0.8) × 折扣系数 × 3%，月封顶5000'},
    {cat:'B',tag:'单宽新发展',color:'#f3e5f5',txt:'#7b1fa2',formula:'套餐月资费 × 1 × 趸交系数(0.8/1.1/1.2)'},
    {cat:'B',tag:'单宽续费',color:'#f3e5f5',txt:'#7b1fa2',formula:'套餐月资费 × 5%（入网13-36月，次月核发）'},
    {cat:'B',tag:'智企光网FTTO',color:'#f3e5f5',txt:'#7b1fa2',formula:'趸交: 首月出账×50%; 分月: 首月出账×1 + 月出账×20%×12'},
    {cat:'B',tag:'智企光网-焕新FTTO',color:'#f3e5f5',txt:'#7b1fa2',formula:'趸交: 首月出账×100%; 分月: 出账×100% + 月出账×20%×5; L版12期100/24期150'},
    {cat:'B',tag:'联通智家',color:'#f3e5f5',txt:'#7b1fa2',formula:'50分/户（T+1月核发，沿用原规则）'},
    {cat:'B',tag:'固话/语音发展',color:'#f3e5f5',txt:'#7b1fa2',formula:'月出账 × 12%，单月单号封顶2000（入网1-12月）'},
    {cat:'B',tag:'固话/语音续费',color:'#f3e5f5',txt:'#7b1fa2',formula:'月出账 × 5%，单月单号封顶1000（入网13-24月）'},
    {cat:'C',tag:'标品(毛利X≥20%)',color:'#e8f5e9',txt:'#2e7d32',formula:'增量: 实缴×7%（封顶5000）; 存量: 实缴×5%（封顶3000）'},
    {cat:'C',tag:'标品(20%>X≥10%)',color:'#e8f5e9',txt:'#2e7d32',formula:'增量: 实缴×5%（封顶3000）; 存量: 实缴×3.5%（封顶2000）'},
    {cat:'C',tag:'标品(X＜10%)',color:'#e8f5e9',txt:'#2e7d32',formula:'增量=(X/标准毛利率)×实缴×每元积分（封顶3000）; 存量=增量×50%（封顶1000）'},
    {cat:'C',tag:'物联网连接',color:'#e8f5e9',txt:'#2e7d32',formula:'增量: 实缴×7%（封顶5000）; 存量: 实缴×3%（封顶3000）'},
    {cat:'C',tag:'新兴ICT',color:'#e8f5e9',txt:'#2e7d32',formula:'计收金额每1000元/1分（≤200万，年封顶10000）；>200万不参与'},
    {cat:'D',tag:'要客市场动作',color:'#fff3e0',txt:'#e65100',formula:'拜访频次100(≥16次满分) + 覆盖率50(≥20%满分) + 商机20/条 + 资料完整性10/户'},
    {cat:'E',tag:'商企市场动作',color:'#fff3e0',txt:'#e65100',formula:'客户拜访100(≥10次满分) + 销售行为100(潜客5/商机10/签约30) + 数字化工具100(每次20)'},
    {cat:'F',tag:'校园市场动作',color:'#fff3e0',txt:'#e65100',formula:'客户拜访100(≥10次满分) + 营销动作100(圈校50/场20) + 商机录入100(20/条)'}
  ];
  var html='';
  formulas.forEach(function(f){
    html+='<div class="formula-item">';
    html+='<div class="formula-item-title"><span class="formula-item-tag" style="background:'+f.color+';color:'+f.txt+'">'+f.cat+'</span>'+f.tag+'</div>';
    html+='<div class="formula-item-formula">'+f.formula+'</div>';
    html+='</div>';
  });
  body.innerHTML=html;
}
document.getElementById('formulaHeader').addEventListener('click',function(){
  var body=document.getElementById('formulaBody');
  var icon=this.querySelector('.toggle-icon');
  body.classList.toggle('open');
  icon.textContent=body.classList.contains('open')?'−':'+';
});

// ===== 联通云犀收费包参考表 =====
function renderYunxiTable(){
  var body=document.getElementById('yunxiBody');
  if(!body)return;
  var list=(APP_DATA.yunxi||[]).slice().sort(function(a,b){return a.fee-b.fee;});
  var html='<div style="padding:14px 20px 4px;font-size:12px;color:var(--text-secondary);line-height:1.7;">存量用户办理联通云犀：积分 = 订购的云犀包月费 × 1，重复订购规则为 6 个月内计算 1 次订购积分。下表为可选的云犀收费功能包，点击行可一键带入计算器。</div>';
  html+='<div class="yx-table-wrap"><table class="yx-table"><thead><tr><th>商品编码</th><th>业务名称</th><th>月费(元)</th><th>本月可得积分</th></tr></thead><tbody>';
  list.forEach(function(y){
    html+='<tr class="yx-row" data-yx-fee="'+y.fee+'" data-yx-name="'+escapeHtml(y.name)+'" title="点击带入计算器">';
    html+='<td>'+y.code+'</td>';
    html+='<td>'+escapeHtml(y.name)+'</td>';
    html+='<td><b>'+y.fee+'</b></td>';
    html+='<td style="color:var(--unicom-red);font-weight:700;">'+y.fee+'</td>';
    html+='</tr>';
  });
  html+='</tbody></table></div>';
  body.innerHTML=html;
  body.querySelectorAll('.yx-row').forEach(function(tr){
    tr.addEventListener('click',function(){
      switchTab('calculator');
      var sel=document.getElementById('calcType');
      for(var i=0;i<sel.options.length;i++){if(sel.options[i].value==='mobile_cloudxi'){sel.selectedIndex=i;break;}}
      sel.classList.add('calc-preset');
      updateCalcForm();
      var pkg=document.getElementById('calc_pkg'),rent=document.getElementById('calc_rent');
      if(pkg){
        for(var j=0;j<pkg.options.length;j++){if(pkg.options[j].value===this.getAttribute('data-yx-fee')){pkg.selectedIndex=j;break;}}
      }
      if(rent)rent.value=this.getAttribute('data-yx-fee');
      doCalc();
      showToast('已带入云犀包：'+this.getAttribute('data-yx-name'));
    });
  });
}
document.getElementById('yunxiHeader').addEventListener('click',function(){
  var body=document.getElementById('yunxiBody');
  var icon=this.querySelector('.toggle-icon');
  body.classList.toggle('open');
  icon.textContent=body.classList.contains('open')?'−':'+';
});

// ===== 计算器结果分享 =====
document.getElementById('shareResultBtn').addEventListener('click',function(){
  var type=document.getElementById('calcType');
  var typeLabel=type.options[type.selectedIndex]?type.options[type.selectedIndex].text:'';
  var points=document.getElementById('calcResultNum').textContent;
  var detail=document.getElementById('calcDetail').textContent;
  var text='📊 积分计算结果\n━━━━━━━━━━\n业务类型: '+typeLabel+'\n预计积分: '+points+' 分\n\n'+detail+'\n━━━━━━━━━━\n(恩施联通政企积分查询系统)';
  var self=this;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      self.classList.add('shared');self.textContent='✓ 已复制';
      setTimeout(function(){self.classList.remove('shared');self.textContent='分享';},2000);
      showToast('已复制，可粘贴到微信/QQ分享');
    }).catch(function(){
      fallbackShare(text,self);
    });
  }else{
    fallbackShare(text,self);
  }
});
function fallbackShare(text,btn){
  var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');
    btn.classList.add('shared');btn.textContent='✓ 已复制';
    setTimeout(function(){btn.classList.remove('shared');btn.textContent='分享';},2000);
    showToast('已复制，可粘贴到微信/QQ分享');
  }catch(e){showToast('复制失败，请手动选择复制');}
  document.body.removeChild(ta);
}

// ===== 模拟器数据持久化 =====
var SIM_SAVE_KEY='simulator_data';
function saveSimData(){
  var data={};
  document.querySelectorAll('[data-sim]').forEach(function(el){
    if(el.value)data[el.id]=el.value;
  });
  try{
    localStorage.setItem(SIM_SAVE_KEY,JSON.stringify(data));
    var badge=document.getElementById('simSavedBadge');
    if(badge){
      badge.style.display='flex';
      clearTimeout(badge._timer);
      badge._timer=setTimeout(function(){badge.style.display='none';},2000);
    }
  }catch(e){}
}
function loadSimData(){
  try{
    var raw=localStorage.getItem(SIM_SAVE_KEY);
    if(!raw)return;
    var data=JSON.parse(raw);
    Object.keys(data).forEach(function(id){
      var el=document.getElementById(id);
      if(el)el.value=data[id];
    });
  }catch(e){}
}
document.getElementById('simResetBtn').addEventListener('click',function(){
  document.querySelectorAll('[data-sim]').forEach(function(el){el.value='';});
  try{localStorage.removeItem(SIM_SAVE_KEY);}catch(e){}
  calcSimulator();
  showToast('模拟器数据已重置');
});
// 监听模拟器输入变化（防抖，避免连击频繁重算+写localStorage）
var debouncedSim=debounce(function(){calcSimulator();saveSimData();},600);
document.querySelectorAll('[data-sim]').forEach(function(el){
  el.addEventListener('input',debouncedSim);
});

// ===== 积分规则分类快捷筛选 =====
var ruleCatFilter='all';
function renderRuleCatFilters(){
  var container=document.getElementById('ruleCatFilters');
  if(!container)return;
  var cats=[
    {key:'all',label:'全部'},
    {key:'A',label:'A-联网（移）'},
    {key:'B',label:'B-联网（固）'},
    {key:'C',label:'C-算网业务'},
    {key:'D',label:'D-要客行业'},
    {key:'E',label:'E-商企'},
    {key:'F',label:'F-校园'}
  ];
  var html='';
  cats.forEach(function(c){
    html+='<div class="rule-cat-chip'+(c.key===ruleCatFilter?' active':'')+'" data-cat="'+c.key+'">'+c.label+'</div>';
  });
  container.innerHTML=html;
  container.querySelectorAll('.rule-cat-chip').forEach(function(chip){
    chip.addEventListener('click',function(){
      ruleCatFilter=this.getAttribute('data-cat');
      renderRuleCatFilters();
      renderRules();
    });
  });
}

// ===== PWA 注册 =====
if('serviceWorker' in navigator){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(function(reg){
      reg.addEventListener('updatefound',function(){
        var newWorker=reg.installing;
        if(newWorker){
          newWorker.addEventListener('statechange',function(){
            if(newWorker.state==='activated' && navigator.serviceWorker.controller){
              window.location.reload();
            }
          });
        }
      });
    }).catch(function(){});
    // 控制器变化时也刷新
    navigator.serviceWorker.addEventListener('controllerchange',function(){
      window.location.reload();
    });
  });
}

// ===== 初始化 =====
initTheme();
renderProductStats();
renderCategoryFilters();
renderProducts();
renderRuleCatFilters();
renderRules();
renderCoefficients();
renderCoeffChart();
renderFormulaCard();
renderYunxiTable();
loadSimData();
calcSimulator();
renderHistory();
renderFavorites();
updateCompareBadge();

// 恢复上次浏览的Tab
try{
  var lastTab=localStorage.getItem('lastTab');
  if(lastTab&&lastTab!=='products'){switchTab(lastTab);}
}catch(e){}

// ===== 进入公告 =====
(function(){
  try{
    if(localStorage.getItem('annDismissed')==='1')return;
  }catch(e){}
  var overlay=document.getElementById('annOverlay');
  var closeBtn=document.getElementById('annCloseBtn');
  var dontShow=document.getElementById('annDontShow');
  setTimeout(function(){
    overlay.classList.add('show');
  },300);
  function closeAnn(){
    overlay.classList.remove('show');
    if(dontShow.checked){
      try{localStorage.setItem('annDismissed','1');}catch(e){}
    }
  }
  closeBtn.addEventListener('click',closeAnn);
  overlay.addEventListener('click',function(e){
    if(e.target===overlay)closeAnn();
  });
})();