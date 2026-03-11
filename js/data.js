/**
 * CS 2026 - Conference Data
 * All site content is defined here for easy maintenance.
 */
const CS2026_DATA = {
  /* ==================== Conference Info ==================== */
  conference: {
    titleCn: "第十届网络空间安全国际研讨会",
    titleEn: "The 10th International Workshop on Cyber Security (CS 2026)",
    location: "中国 曲阜",
    date: "2026年5月15日 - 5月17日",
    organizer: "曲阜师范大学网络空间安全学院",
    coOrganizer: "鲁南网络空间安全研究院",
    sponsor: "XXX",
  },

  /* ==================== Navigation Tabs ==================== */
  navigation: [
    { id: "home", label: "主页" },
    { id: "committees", label: "委员会成员" },
    { id: "keynotes", label: "特邀嘉宾" },
    { id: "program", label: "会议日程" },
    { id: "registration", label: "会议注册" },
    { id: "venue", label: "会议地点" },
    { id: "download", label: "文件下载" },
  ],

  /* ==================== Carousel Images ==================== */
  carouselImages: [
    "img/kongmiao.jpg",
    "img/xingtan.jpg",
    "img/Kzsj.jpg",
    "img/kzbwg.jpg",
    "img/hotel.jpg",
  ],

  /* ==================== Introduction ==================== */
  introductions: [
    '随着数字化、智能化进程的不断加快，云计算、大数据、人工智能、物联网等新兴技术广泛应用于经济社会各领域，网络空间与现实社会深度融合，网络攻击技术持续演进，攻击方式更加隐蔽化、自动化与智能化，网络与信息安全面临更加复杂严峻的挑战。习近平总书记指出："没有信息化就没有现代化"。网络空间安全已成为国家安全体系的重要组成部分，是推动数字中国建设、保障经济社会平稳运行和实现高质量发展的重要支撑。因此，加强网络空间安全领域的理论研究与技术创新，深化交流合作与协同发展，具有十分重要的现实意义和战略意义。',
    "网络空间安全国际研讨会（International Workshop on Cyber Security）顺应时代发展需求而设立，致力于探讨网络空间安全领域的热点问题、前沿技术与关键理论。自2015年在西安首次举办以来，会议先后在厦门、武汉、北京、广州、南京、天津、杭州等地成功召开，汇聚了国内外众多专家学者，已成为网络空间安全领域具有重要影响力的学术交流平台。2026年会议将在曲阜举办，由曲阜师范大学承办，邀请多位业内知名专家作特邀报告，报告内容涵盖网络空间安全、密码学、数据安全、人工智能安全、系统安全等多个方向。诚邀海内外专家学者相聚孔孟之乡，共同交流最新研究成果，携手推动网络空间安全事业高质量发展！",
  ],

  /* ==================== Meeting Info ==================== */
  meetingInfo: [
    { label: "报到时间", value: "2026年5月15日（周五）12:00-21:00" },
    { label: "会议时间", value: "2026年5月16-17日（周六、周日上午）" },
    {
      label: "会议地点",
      value: "银座佳悦酒店（山东省济宁市曲阜市德化路 169 号）",
    },
    { label: "签到地点", value: "银座佳悦酒店大堂" },
    {
      label: "住宿地点",
      value: "银座佳悦酒店（山东省济宁市曲阜市德化路 169 号）",
    },
  ],

  /* ==================== Contacts ==================== */
  contacts: [
    { name: "张睿", phone: "19508494785" },
    { name: "孙洁", phone: "19508494792" },
  ],
  contactEmail: "cs2026gf@163.com",

  /* ==================== Sponsorship ==================== */
  sponsorLevels: [
    { name: "钻石赞助", amount: "10万及以上" },
    { name: "金牌赞助", amount: "5万及以上" },
    { name: "银牌赞助", amount: "2万及以上" },
    { name: "铜牌赞助", amount: "1万及以上" },
  ],
  sponsorBenefits: [
    "赞助对本次会议的成功举办至关重要。若贵单位有意赞助 CS 2026，欢迎通过电话或邮件与我们联系洽谈。"
  ],

  /* ==================== Keynote Speakers (特邀报告嘉宾) ==================== */
  keynoteSpeakers: [
    {
      id: "dcy",
      displayName: "董长宇 教授",
      university: "广州大学",
      image: "img/dcy.jpg",
      title: "从中心化到分布式差分隐私",
      abstract: `随着大数据与人工智能的迅猛发展，数据在社会治理、科学研究与商业应用中的价值日益凸显。然而，数据集中存储与分析所带来的隐私泄露风险也不断加剧。如何在充分挖掘数据价值的同时实现严格的隐私保护，已成为当今数据科学领域的重要研究课题。差分隐私（Differential Privacy, DP）作为一种基于随机噪声注入的形式化隐私保护机制，能够在提供统计分析功能的同时，为个体数据提供可量化的隐私保障，已成为隐私计算研究的核心理论基础之一。
本报告将重点介绍差分隐私从中心化模型（Central DP）向分布式模型（Distributed DP）演进过程中面临的挑战，并分享团队在本地差分隐私（LDP）与洗牌差分隐私（Shuffle DP）方面的最新研究进展。针对传统本地差分隐私在数据效用上的局限，我们提出了一个通用的LDP到效用优化LDP（ULDP）转换框架（GLUTF）以及多种新型机制。该框架通过区分数据敏感度，有效提升了隐私保护下的数据利用率，在数据效用方面实现了数量级的性能提升。此外，我们提出了私有个体计算（Private Individual Computation, PIC）的新框架，首次将Shuffle模型扩展至支持个性化输出。该框架结合创新的Minkowski随机器与加密通信机制，在保护用户匿名性的同时，实现了高效用、高精度的个体化计算。
这些新方法显著提升了分布式隐私保护技术的实用性，为在分布式环境下实现高效用、安全的数据利用提供了新的解决思路，并为未来的隐私计算与可信人工智能奠定了更加坚实的理论与应用基础。`, 
      bio: `董长宇，教授，博士生导师，入选国家级高层次人才，广州大学人工智能学院副院长。英国纽卡斯尓大学访问教授。博士毕业于伦敦帝国理工学院，曾在英国思克莱德大学、纽卡斯尔大学担任教职，并任英国阿兰·图灵研究所图灵研究员。主要研究领域为人工智能安全与隐私。在上述研究方向主持承担了多个项目及课题，包括英国EPSRC资助项目"实用数据密集型安全计算"、"恶意样本防御方法"、"可问责云计算"，及国家自然基金项目"多方机器学习中推理攻击与防御研究"。在相关研究领域发表高水平论文50余篇，包括安全顶会ACM CCS、USENIX Security以及CCF推荐的A类期刊IEEE TDSC/TIFS/TPDS/TKDE等，三篇论文获得国际学术会议最佳论文奖。担任过英国及欧盟多个国家基金项目评审专家及多个国际学术会议程序委员会主席和期刊编委。`,
    },
    {
      id: "hedebiao",
      displayName: "何德彪 教授",
      university: "武汉大学",
      image: "img/hedebiao.jpg",
      title: "（题目待定）",
      abstract: `（内容待定）`, 
      bio: `何德彪，武汉大学计算机学院教授、院长、国家杰出青年科学基金获得者。主要从事密码学、人工智能安全、区块链技术等方面的研究工作。主持国家自然科学基金、科技部重点研发计划等国家级科研项目。近5年，在IEEE TIFS，IEEE TDSC、ASIACRYPT 、PKC、CHES等国际知名期刊/会议上发表论文40余篇，谷歌学术引用总次数超过2万次。获教育部自然科学奖一等奖、湖北省自然科学奖二等奖等省部级奖励4项。担任SCIENCE CHINA Information Sciences、密码学报等多个期刊编委。`,
    },
    {
      id: "zhutianqing",
      displayName: "朱天清 教授",
      university: "澳门城市大学",
      image: "img/zhutianqing.jpg",
      title: "人工智能跨境安全：新环境下的新挑战",
      abstract: `（内容待定）`, 
      bio: `朱天清，教授，博导，目前为澳门城市大学数据科学学院副院长（研究）。曾于2000年和2004年分别获武汉大学本科和硕士学位，2014年获澳大利亚迪肯大学博士学位。曾任悉尼科技大学副教授，澳大利亚自然科学基金领域专家（Australian Research Council College of Expert），以及中国地质大学（武汉）教授。曾主持和参与澳大利亚国家自然科学基金八项，其中主持四项，参与四项，共计研究经费四百余万澳元。曾主持中国国家自然科学基金青年项目一项，面上项目一项，均为人工智能及数据安全类主题。朱天清的研究领域为信息安全，数据隐私保护以及人工智能安全。在安全领域内提出了多种有关人工智能算法的安全漏洞以及其解决方案，并提出了以安全分析的方式来防御人工智能算法攻击的方案。在安全领域中发表论文 180 余篇，其中SCI收录120余篇，并在IEEE Transactions系列杂志上以第一作者或通信作者发表论文 40 余篇。任4本 SCI 期刊副编辑（Associate Editor）；多项人工智能会议程序执行主席或者委员（PC Chair & PC member）。培养博士生30余名。曾入选斯坦福全球2%科学家榜单。`,
    },
    {
      id: "yangmin",
      displayName: "杨珉 教授",
      university: "复旦大学",
      image: "img/ym.jpg",
      title: "前沿AI系统安全风险评测与治理",
      abstract: `随着生成式大模型和智能体技术迅速发展，如何针对以大模型为核心的前沿AI系统开展安全风险评测与治理是全球面临的共性难题。一方面，以图、文、音视频生成为主要功能的多模态大模型持续演进，内容安全风险尤为严峻，急需自动化程度高、覆盖面广和靶向性强等动态安全评测技术；另一方面，大模型通过工具、知识库、推理编排框架等基础软件，能够与真实世界自主交互，一旦具备自主复制、欺骗操控等危险红线能力，或对全人类带来灾难性风险。本报告将围绕大模型内容安全和智能体行为安全两大核心议题，分享团队近年来在前沿AI系统安全评测与治理方面的研究进展和思考。特别地，团队近期在国际上首次发现十余款大模型能够在无人工干预情况下完成自我复制，得到国内外广泛关注和高度认可，为全球AI治理和对话提供了建设性思路。`, 
      bio: `杨珉，男，汉族，1979年1月生，中共党员，博士，复旦大学计算机科学技术学院院长兼党委副书记，教育部长江学者特聘教授，第八届国务院学位委员会网络空间安全学科评议组成员。杨珉曾任国家973项目首席科学家、复旦大学网络空间安全战略与技术研究工作室主任、计算机科学技术学院副院长（主持工作），2019年获网络安全优秀教师奖。主要从事恶意代码检测、漏洞分析挖掘、AI安全等网络安全领域研究。主持国家重点研发计划、国家自然科学基金重点项目及华为、百度等企业项目，总经费超9000万元。带领团队发现身份认证机制重大安全问题，研究成果获中央领导批示并应用于百度、阿里等企业。2023年指导研发复旦大学CFFF智算平台，支撑伏羲天气预报大模型等重大科研成果。其作为作者代表的研究报告《上海"一网通办"公共服务平台安全体系与能力建设研究》获得第十五届上海市决策咨询研究成果奖一等奖。兼任复旦大学中国网络空间战略研究所副所长、上海市网络空间安全战略研究所执行所长、上海市青年联合会第十二届副主席。`,
    },
    {
      id: "yangguomin",
      displayName: "Associate Professor YANG Guomin",
      university: "Singapore Management University",
      image: "img/YANG Guomin.jpg",
      title: "Privacy Enhancing Technologies for Mobile and Decentralized Applications",
      abstract: `With the growing demand for user and data privacy in modern computing and communication systems, privacy-enhancing technologies (PETs) have attracted significant attention in recent years. In this talk, we will review and discuss several recent advances in PETs that focus on addressing challenges in security, privacy, usability, and accountability in mobile and decentralized applications. The talk will conclude with a few open research problems and future directions in this area.`, 
      bio: `YANG Guomin received his PhD in Computer Science from the City University of Hong Kong in 2009. He is currently an Associate Professor of Computer Science and the Coordinator for the BSc (CS) Cybersecurity Track at the School of Computing and Information Systems, Singapore Management University (SMU). His research covers a broad area of Cybersecurity and Cryptography, with a focus on privacy-preserving systems, authentication, and secure cloud storage. He has published extensively in many international conferences and journals in Cybersecurity, such as USENIX Security, NDSS, CRYPTO, IEEE TIFS, and IEEE TDSC. He serves as an Associate Editor for IEEE Transactions on Information Forensics and Security, IEEE Transactions on Services Computing, and the Theoretical Computer Science Journal. He has served as the Conference Chair for the International Conference on Provable and Practical Security (2025) and the 27th Australasian Conference on Information Security and Privacy (ACISP 2022).`,
    },
    {
      id: "zhaijidong",
      displayName: "翟季冬 教授",
      university: "清华大学",
      image: "img/zjd.jpg",
      title: "赤兔：大模型推理系统",
      abstract: `（内容待定）`, 
      bio: `翟季冬，清华大学计算机系长聘教授、博士生导师，青海大学计算机技术与应用学院院长。2003年获电子科技大学工学学士学位，2010年获清华大学工学博士学位。2015-2016年任斯坦福大学访问助理教授，现任清华大学计算机系高性能计算研究所副所长，2023年6月起任清华大学长聘教授，2025年1月起兼任青海大学计算机技术与应用学院院长。翟季冬主要从事并行计算、编程语言与编译器、性能评测等领域研究，在SC、PPoPP、OSDI等国际会议及IEEE TC等期刊发表论文，研究成果获IEEE TPDS 2021最佳论文奖、CCF自然科学一等奖。主持国家杰出青年科学基金、国家重点研发计划项目"面向新一代国产超算系统的统一并行编程模型与并行编译"等项目。担任清华大学学生超算团队教练，指导团队13次获得SC、ISC、ASC等国际赛事冠军。2020年获CCF-IEEE CS青年科学家奖，2025年入选"算力中国·青年先锋人物"十大榜单。`,
    },
    {
      id: "caoxiaochun",
      displayName: "操晓春 教授",
      university: "中山大学",
      image: "img/caoxiaochun.jpg",
      title: "可信可解释人工智能",
      abstract: `（内容待定）`, 
      bio: `操晓春，中山大学信息学部副主任、网络空间安全学院院长，国家杰出青年/优秀青年基金获得者。主要从事人工智能基础研究和网络空间内容安全应用研究；发表ACM/IEEE 汇刊100余篇，CCF-A类期刊及会议长文文章160余篇；Google引用20000余次，H-index 65；获得省部级一等奖和二等奖各1项。现兼任TPAMI的Associate Editor、TIP的Senior Area Editor、电子学报的编委，曾兼任TMM和TCSVT的的Associate Editor，10余次兼任NeurIPS/ICCV/CVPR/IJCAI/ACMMM的Area/Track Chairs。指导博士生获得中国电子学会优博、CCF优博、中科院优博论文3篇次；指导的研究生有4人入选国家级人才计划。`,
    },
    {
      id: "zhangweizhe",
      displayName: "张伟哲 教授",
      university: "哈尔滨工业大学",
      image: "img/zwz.png",
      title: "隐私保护下的大数据分析系统关键技术与应用",
      abstract: `（内容待定）`, 
      bio: `张伟哲，哈尔滨工业大学网络空间安全学院教授、博士生导师，主要从事网络空间安全、并行与分布式系统等领域的研究。他在国内外知名期刊和会议发表论文40余篇，申请国家发明专利3项。张伟哲教授在多个学术活动中担任重要角色，如在北京师范大学未来网络与智能计算分论坛作主题报告，参与国家重点研发计划项目中期检查，并受邀在首届中国密码学会大数据与人工智能安全学术会议作报告。其团队提出的大数据隐私保护平台理念，推动了隐私安全技术的发展。`,
    },
    {
      id: "guanzhenyu",
      displayName: "关振宇 教授",
      university: "北京航空航天大学",
      image: "img/gzy.png",
      title: "密态数据要素流通关键技术研究",
      abstract: `密态数据处理技术为数据要素安全流通提供了解决方案。本报告简要介绍部分数据密态处理技术特点，着重讲介绍基于同态加密的密态数据要素流通技术在数据联合查询、数据外包查询、在线密态检测场景的技术难点、创新方案、科研成果和产业化应用的前景。`, 
      bio: `关振宇，北京航空航天大学教授、博士生导师，国家杰出青年科学基金获得者。致力于网络空间安全学术前沿科技的理论与应用研究，在网络安全、区块链、人工智能等相关领域取得了丰富的研究成果。近五年，以第一作者/通讯作者发表TPAMI（IF:23.6）、TIP（IF:10.60）、TDSC（IF:7.20）、ACM CCS等期刊/会议论文40篇，高被引论文4篇，获ACM CCS杰出论文奖等最佳论文奖3项。获专利授权42项。主持国家自然科学基金杰出青年项目、面上项目、联合重点项目（叶企孙）等科研项目35项。成果应用于南海应急搜救、国家三大公共安全视频监控工程、空军航空兵/空降兵及战略支援部队应急指挥等场景，在我国边海防、公共安全防范体系等重要项目建设中发挥了关键的支撑作用。成果获吴文俊人工智能学会自然科学一等奖、教育部技术发明一等奖等省部级奖项6项。`,
    },
    {
      id: "dengxianjun",
      displayName: "邓贤君 教授",
      university: "华中科技大学",
      image: "img/dxj.png",
      title: "智能工业物联网长时序数据可靠感知与安全计算：现状、挑战与趋势",
      abstract: `智能工业物联网作为工业智能化的核心信息基础设施，依托底层设备对复杂工况下的长时序数据进行实时感知、传输与计算，以支撑生产控制、状态监测与安全决策等关键任务。然而，底层工业设备在动态环境中易受到能耗衰减、硬件老化与链路波动等因素影响，导致现场信息采集不完整、感知覆盖不足，传统模型难以适应其多变特性，从而引发长时序数据感知不可靠的问题；同时，长时序数据在跨层级、跨区域的传输与协同计算过程中常伴随缺失、噪声与异常，进一步削弱了智能工业物联网的计算可信度与安全性。本报告围绕智能工业物联网长时序数据的可靠感知与安全计算两大方向展开系统研究。在可靠感知方面，基于深度强化学习提出网络分簇与感知设备故障检测策略，以适应动态工业环境并提升感知网络的能效与稳定性；同时构建张量化多元多阶马尔科夫模型，统一刻画设备状态演化、网络覆盖率与链路可靠性，形成可量化的长时序数据感知可靠性评估体系。在安全计算方面，提出基于条件扩散模型的长时序数据补全方法，有效缓解数据缺失带来的计算偏差；并设计基于动量对比学习的异常检测模型，实现对工业长时序数据的高精度可信性评估。最后，报告对智能工业物联网长时序数据可靠感知与安全计算研究的未来趋势进行了前瞻性分析。`, 
      bio: `邓贤君，湖南郴州临武人，华中科技大学网络空间安全学院教授、博士生导师、院长助理，曾任南华大学电气工程学院副教授、通信工程系负责人。加拿大St. Francis Xavier大学博士后，湖北省优秀博士学位论文获得者。获湖南省芙蓉学者（青年学者）、IEEE TCSC"优秀青年科学家"、湖南省青年骨干教师（验收优秀）、湖南省首届"我最喜爱的青年教师"、南华大学船山学者等荣誉。主要从事无线传感器网络、物联网覆盖优化及安全研究，主持国家自然科学基金面上项目、青年科学基金各1项，教育部产学合作协同育人项目2项，累计主持国家级科研项目20余项。在《IEEE Transactions on Industrial Informatics》《IEEE Internet of Things Journal》等期刊发表中科院JCR一区论文27篇，2篇入选ESI高被引论文。研究成果应用于铀尾矿库放射性污染监测等工业场景。担任IEEE Smart World Congress等国际会议程序委员会主席，兼任国家自然科学基金通讯评审专家。指导团队获第三届中国研究生网络安全创新大赛"网安之星"奖项。`,
    },
    {
      id: "hupengfei",
      displayName: "胡鹏飞 教授",
      university: "山东大学",
      image: "img/hpf.png",
      title: "具身智能感知安全",
      abstract: "（内容待定）", 
      bio: `胡鹏飞，山东大学教授/博导，山东省优青获得者，齐鲁青年学者。主要研究兴趣涉及网络安全、人工智能安全、移动计算。目前为CCF物联网专委会、CCF网络与数据通信专委会执行委员、ACM SIGCOMM China委员、ACM SIGBEDChina委员。先后主持/参与国家重点研发计划、美国军方重要系统安全项目等产学研项目10余项。在IEEE S&P、USENIX Security、CCS、IEEE INFOCOM、IEEE TMC等国内外知名会议/期刊上发表学术论文50余篇。担任IEEE TWC、IEEE IoT等SCI一区期刊编委，和CCS、INFOCOM、WWW、ICDCS、MASS (2022年领域主席)等多个知名国际学术会议的的程序委员会委员。`,
    },
    {
      id: "shenmeng",
      displayName: "沈蒙 教授",
      university: "北京理工大学",
      image: "img/sm.jpg",
      title: "面向图像分类系统的对抗样本生成与检测技术",
      abstract: `（内容待定）`, 
      bio: `沈蒙，北京理工大学网络空间安全学院教授、博士生导师，国家级青年人才。他主要从事数据安全、人工智能安全、网络加密流量分析及区块链安全等领域研究。截至2025年，他主持国家自然科学基金优秀青年科学基金、国家重点研发计划课题等国家级项目10余项，在IEEE JSAC、IEEE TIFS等期刊发表论文60余篇，授权发明专利16项。曾获北京市科技进步二等奖、ACM中国新星奖等荣誉，并参与北京冬奥会网络安全保障等重大项目。`,
    },
    {
      id: "zhangfengwei",
      displayName: "张锋巍 副教授",
      university: "南方科技大学",
      image: "img/zfw.jpg",
      title: "AI加速器可信执行环境研究",
      abstract: `AI智算的兴起推动了GPU/NPU/FPGA等加速器的快速发展，但带来了数据泄露的安全风险。目前，工业界与学术界推出了机密AI芯片（如NVIDIA H100）等设计，但仍在兼容性、性能开销等方面有缺陷，导致难以广泛部署。针对这些问题，我们推出高兼容、高安全的AI密态升级卡，并以“ccAI: A Compatible and Confidential System for AI Computing”为题收录于MICRO’25。该卡通过独特的“外接卡”设计，在无须修改AI软硬件的前提下实现“即插即用”，为国内外主流AI芯片提供全栈级密态计算能力。这项工作延续了我们在可信AI加速器的深入探索，是继Strongbox [CCS'22], CAGE [NDSS'24], MOLE [CCS'25]等工作后的又一重要进展。后续深入探索AI加速器计算安全，为该领域撰写综述“SoK: Analysis of Accelerator TEE Designs”并收录于NDSS’26，为可信AI加速器的设计提供重要参考。`,      
      bio: `张锋巍，南方科技大学计算机科学与工程系指南针（COMPASS）实验室负责人、研究生院副院长（挂职）、长聘副教授、研究员、博导、ACM/CIE/IEEE高级会员、CCF杰出会员，主要研究领域是系统安全，包括硬件辅助安全、TEE可信执行环境、Arm/x86/RISC-V架构安全、GPU机密计算、恶意软件透明分析，共发表100余篇论文；曾担任美国韦恩州立大学计算机系助理教授，并获批了3项美国自然基金（NSF）项目。2019年加入南科大后，作为通讯作者指导COMPASS学生发表了IEEE S&P、USENIX Security、ACM CCS、NDSS安全顶会论文（CCF-A）；近3年都担任四个安全顶会的PC；主持5项国家自然科学基金项目（青年、面上、青年人才、集成项目课题、联合基金重点），以及千万级企业横向项目。`,
    },
    {
      id: "chengguang",
      displayName: "程光 教授",
      university: "东南大学",
      image: "img/cg.jpg",
      title: "网络流量智能精细化感知分类",
      abstract: `（内容待定）`,
      bio: `东南大学首席教授、二级教授，中央某部委国家高层次人才，江苏省333人才工程第二层次，任网络空间安全学院执行院长、计算机网络和信息集成教育部重点实验室主任、网络空间国际治理研究基地主任、江苏省泛在网络安全工程研究中心主任、江苏省网络空间安全学会理事长、中国指挥控制学会网络空间安全专委会副主任、中国计算机学会互联网专委会副主任、科技部网络空间治理和安全领域"十四五"规划专家等学术兼职。研究方向网络流量安全分析、主动防御、内生安全等，主持承担国家重点研发、国家自然基金、中央网信办专项等科研项目40余项。主持中央网信办、教育部的"一流网络安全学院建设示范项目"、"网络空间国际治理研究基地"、教育部网络空间安全新工科等项目。获网络安全优秀教师、国家教学成果一等奖，牵头获2024年江苏省十大科学进展、2021年江苏省科技一等奖、2014年江苏省科技二等奖。发表学术论文100余篇，出版专著9部，培养研究生200余人，两名博士生获江苏省优秀博士论文。培养的学生先后获得"挑战杯"等各类全国竞赛擂主、特等奖、一等奖等20多项。`,
    },
    {
      id: "zhangchao",
      displayName: "张超 教授",
      university: "清华大学",
      image: "img/zc.jpg",
      title: "软件漏洞挖掘智能体技术",
      abstract: `（内容待定）`,
      bio: `张超，男，1986年生。北京大学数学科学学院学士（2008年）、王选计算机研究所博士（2013年），现任清华大学网络研究院副院长、长聘副教授、蓝莲花战队教练，中国计算机学会218Club第二届执行委员会主席。2016年完成加州大学伯克利分校博士后研究后入职清华大学。研究方向为软件与系统安全，主持承担重点研发计划项目20余项，发表国际四大安全会议论文近40篇。研究成果包括构建软件安全智能分析系统，发现上千个CVE漏洞，研发的自动漏洞挖掘、防御方案获微软BlueHat特别提名奖、腾讯CSS安全探索论坛突破奖，带领团队在DARPA CGC机器自动攻防竞赛中获得初赛防御第一、决赛攻击第二。2017年获中国科协青年人才托举工程资助，2018年先后获清华大学“学术新人奖”、求是杰出青年学者奖 ，2019年入选《麻省理工科技评论》中国区“35岁以下科技创新35人”，2024年获CCF青年科技奖。`,
    },
  ],

  /* ==================== Guest Speakers (特邀嘉宾) ==================== */
  guestSpeakers: [
    {
      id: "gaofei",
      displayName: "高飞 副教授",
      university: "北京邮电大学",
      image: "img/gaofei.1.jpg",
      bio: `高飞，浙江大学控制科学与工程学院长聘副教授、研究员、博士生导师，FAST实验室副主任兼技术负责人，FAR课题组负责人，国家自然科学基金委优秀青年科学基金获得者。2015年于浙江大学控制学院获学士学位，2019年获香港科技大学机器人研究所博士学位。现任浙大湖州研究院-集群机器人自主导航研究中心PI，智能无人系统协同导航控制技术联合实验室主任，浙江大学控制学院空中机器人团队负责人。高飞主要从事机器人轨迹规划、自主导航、集群协同等领域研究，以第一作者/通讯作者在Science Robotics、IEEE Transactions on Robotics等期刊会议发表论文70余篇，研究成果入选《科学》网站首页报道。获IEEE TRO 2020年最佳论文荣誉奖、国际基础科学大会2024年前沿科学奖、2024年青橙奖"最具潜力奖"。2025年在《科学·机器人》发表空中机器人特技飞行研究成果，实现复杂环境下220米超长距离连续特技飞行。担任IET Cyber System & Robotics等期刊编委及中国指挥与控制学会青年工作委员会委员。创立微分智飞公司研发非GPS依赖的全自主飞行技术，相关成果应用于矿产勘探与应急安全领域。`,
    },
    {
      id: "zhangzhenfeng",
      displayName: "张振峰 副总工程师",
      university: "中国科学院软件研究所",
      image: "img/zhangzhenfeng.bmp",
      bio: `张振峰，男，1972年2月生，中国国籍，中国科学院数学与系统科学研究院博士，现任中国科学院软件研究所副总工程师、研究员、博士生导师。长期从事密码学与安全协议、可信计算、区块链安全及后量子密码领域研究，主导的匿名实体鉴别机制（YZ机制）被发布为ISO/IEC 20009-4:2017国际标准。2001年7月获博士学位后进入中国科学院研究生院开展博士后研究，2003年起在中国科学院软件研究所工作，历任副研究员、研究员，2013年出任实验室主任及副总工程师。主持研制SM2椭圆曲线数字签名标准和SM9标识数字签名标准，推动我国公钥密码标准纳入ISO/IEC国际标准。曾获中国标准创新贡献奖三等奖，担任中国密码学会密码算法专业委员会主任、ISO/IEC SC27国际标准化组织专家。`,
    },
    {
      id: "xuqiuliang",
      displayName: "徐秋亮 教授",
      university: "山东大学",
      image: "img/xvqiouliang.jpg",
      bio: `徐秋亮，山东大学软件学院教授。现任中国密码学会常务理事，中国电子学会区块链分会副主任委员，山东计算机学会网络空间安全专委会主任委员。中国密码学会密码算法专委会委员、安全协议专委会委员、区块链专委会常务委员，密码学会密码应用工作委员会委员，中国保密协会隐私保护专委会常务委员，《计算机研究与发展》、《密码学报》、《山东大学学报》编委。长期从事密码学与信息安全的研究，早在2000年就开始了安全多方计算、群组密码的研究，具有长期的积累，在世界密码学三大顶会Crypto、Asiacrypt发表安全多方计算、零知识证明等基础研究论文6篇，共发表论文100余篇。作为负责人主持国家自然科学基金项目5项，其他国家项目、省级重大项目等多项。主要研究兴趣主要有密码算法与协议设计，安全多方计算理论及实用化，基于安全多方计算的数据隐私保护及数据融合利用，联邦计算，云环境下的数据安全、区块链理论与实践等。多年从事离散数学、密码学课程教学，曾被评为山东大学优秀教师，荣获2015届"泰山学堂毕业生最喜欢的老师"。`,
    },
    {
      id: "liuzheli",
      displayName: "刘哲理 教授",
      university: "南开大学",
      image: "img/liuzheli.jpg",
      bio: `刘哲理，男，1978年出生，山东潍坊人，2009年获吉林大学博士学位，南开大学计算机学院院长、密码与网络空间安全学院常务副院长，教授，博士生导师，教育部宝钢优秀教师，南开大学百名青年学科带头人，天津市中青年科技领军人才，中国新一代人工智能战略研究院智能网安研究中心主任。自2011年起发表IEEE TDSC、IEEE TKDE、IEEE TIFS、IEEE TC、IEEE TSC、IEEEE TITS、IEEE INFOCOM等顶级期刊论文数十篇，其中7篇入选ESI高被引前1%。主持国家自然科学基金、天津市自然科学基金等纵向课题7项，与信息安全企业合作建立"数据安全联合实验室"，主持横向课题10余项，申请专利7项（授权4项），获批软件著作权2项。担任《网络与信息安全学报》编委、Springer期刊《Cybersecurity》副主编，担任ICA3PP2018等多个国际会议主席。主要研究方向包括基于密码学的数据隐私保护、密文数据库、密文集合运算、差分隐私及人工智能安全，提出基于数据胶囊的可信数据空间构建策略。主讲《数据结构与算法》《漏洞利用及渗透测试》课程，指导研究生获南开大学优秀硕士论文、国家网络安全奖学金等。`,
    },
    {
      id: "shenjian",
      displayName: "沈剑 教授",
      university: "浙江理工大学",
      image: "img/shenjian.jpg",
      bio: `沈剑，江苏南京人，浙江理工大学信息科学与工程学院院长、教授、博士生导师，研究方向为公钥密码学、数据安全与区块链。2023年入选国家级领军人才，获国家自然科学基金优秀青年科学基金资助，曾任南京信息工程大学研究生院副院长、计算机与软件学院副院长。主持国家重点研发计划项目《基于区块链的大规模分布式可信智能计算关键技术及应用》、国家自然科学基金联合重点项目《面向海峡两岸多源数据安全与隐私保护理论及关键技术研究》等国家级项目。2019年获中国密码学会优秀青年奖，2020年获江苏省计算机学会青年科技奖，以第一完成人获教育部自然科学奖二等奖。发表学术论文百余篇，2019年至2024年连续入选全球高被引科学家榜单。现任中国密码学会安全协议专委会委员、中国电子学会网络空间安全专委会委员、中国计算机学会区块链专委会执委，担任多个国际期刊主编及国际学术会议主席。`,
    },
  ],

  /* ==================== Committees ==================== */
  committees: {
    generalChairs: {
      title: "大会主席",
      members: [
        { name: "马旭", university: "曲阜师范大学", image: "img/mx.jpg" },
      ],
    },
    programChairs: {
      title: "程序委员会主席",
      members: [
        {
          name: "陈晓峰",
          university: "西安电子科技大学",
          image: "img/cxf.jpg",
        },
        { name: "黄欣沂", university: "暨南大学", image: "img/hxy.jpg" },
      ],
    },
  },

  /* ==================== Registration ==================== */
  registration: {
    fees: [
      { category: "非学生代表注册", amount: "2800 RMB/人" },
      { category: "学生代表注册", amount: "1800 RMB/人" },
    ],
    payment: [
      { label: "账户名", value: "济宁鲁南网络空间安全研究院" },
      { label: "账号", value: "815010301421032447" },
      { label: "开户行", value: "济宁银行股份有限公司开发区支行" },
      { label: "转账附言", value: "CS2026姓名, 例: CS2026张三." },
      { label: "联系人", value: "张睿    19508494785" },
    ],
    cardNote: "*支持现场刷卡，报到时在报到处刷卡缴费。",
    receiptNotice: "请各位与会代表尽快返回注册回执（用于确认住宿信息）",
    receiptInstruction:
      '将回执单和缴费凭证（可选），以“CS2026+姓名”的形式命名，发送至邮箱：cs2026qf@163.com',
    receiptLink: "file/CS-reply.pdf",
  },

  /* ==================== Venue ==================== */
  venue: {
    description:
      "CS2026 将在曲阜银座佳悦酒店举行。酒店位于曲阜市核心区域，地址是山东省济宁市曲阜市德化路169号。交通便利，距离济宁大安机场约29.7公里，车程约40分钟；距曲阜东站约9.5公里，乘车行程约为12分钟，距离尼山圣境22.8公里，车程约为30分钟，至孔子博物馆1.8公里，至孔府、孔庙2.9公里。",
    address: "山东曲阜德化路169号",
    roomPrice:
      "300 元/间/天/单早（协议价，需要在注册时明确住宿需求）",
    phone: "15965479117崔燕",
    mapUrl:
      "https://map.baidu.com/search/%E6%9B%B2%E9%98%9C%E9%93%B6%E5%BA%A7%E4%BD%B3%E6%82%A6%E9%85%92%E5%BA%97/@13023862.698084854,4216892.3270808,19z?querytype=s&da_src=shareurl&wd=%E6%9B%B2%E9%98%9C%E9%93%B6%E5%BA%A7%E4%BD%B3%E6%82%A6%E9%85%92%E5%BA%97&c=257&src=0&wd2=%E6%B5%8E%E5%AE%81%E5%B8%82%E6%9B%B2%E9%98%9C%E5%B8%82&pn=0&sug=1&l=19&b=(12608493.405,2632483.52;12609342.905,2632951.02)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=79b3db58391ad4e84d776e1b&device_ratio=2",
    mapImage: "img/jdwz.png",
    otherHotels:
      "曲阜银座佳悦酒店附近有许多其它酒店，例如山禾·庭院酒店，维也纳酒店等，请参会代表自行选择预定。",
  },

  /* ==================== Downloads ==================== */
  downloads: [
    { title: "会议通知", text: "CS2026会议通知下载", link: "file/CS-note.pdf" },
    { title: "会议议程", text: "CS2026会议议程下载", link: "file/CS-date.pdf" },
    {
      title: "会议回执单",
      text: "CS2026会议回执单下载",
      link: "file/CS-reply.xlsx",
    },
  ],

  /* ==================== Footer Logos ==================== */
  footerLogos: ["img/qfnu.jpg", "img/qfnuwa.jpg", "img/wayjy.jpg"],
};
