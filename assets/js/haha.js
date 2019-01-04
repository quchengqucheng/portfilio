function InitChart() {
var buttonControl=0;
  var data = {
    series:[
    {name:"贾母",ename:"Jia Mu",family:["JIA","SHI"],intro:"来自四大家族之史家，贾府老太太，宝玉祖母。在贾家从重孙媳妇做起，一直到有了重孙媳妇。她凭着自己的精明能干，才坐稳了贾家大家长的位置。",values:[0,0,32,3,6,2,3,15,7,0,6,4,4,0,3,10,8,21,3,4,3,42,7,9,25,0,0,8,53,3,5,0,14,2,22,5,6,24,29,70,31,16,39,30,2,18,28,3,16,34,4,15,41,61,0,25,37,9,5,0,0,2,0,13,0,0,1,1,25,10,38,4,22,1,56,29,6,10,6,2,16,9,22,52,22,1,1,21,3,11,6,15,0,22,37,29,41,43,10,11,12,0,0,4,11,18,42,57,44,15,5,1,0,1,0,0,1,2,0,2]},
    {name:"贾赦",ename:"Jia She",family:["JIA"],intro:"贾母的儿子，贾迎春和贾琏的父亲",values:[0,2,4,1,0,0,0,0,0,0,0,1,1,2,4,8,0,7,0,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,2,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,4,0,0,0,10,3,0,0,4,0,0,0,14,3,11,0,0,0,0,0,0,6,14,3,1,0,0,0,0,0,0,11,0,0,13,5,13,1,0,2,0,0,0,0,0,1,0,0,4,1]},
    {name:"邢夫人",ename:"Xing Furen ",family:["JIA"],intro:"贾赦的妻子",values:[0,0,7,0,1,0,0,0,0,0,12,0,7,0,1,2,0,4,0,0,0,0,0,10,3,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,5,6,0,25,12,0,9,0,0,1,8,3,0,0,10,0,0,0,0,0,0,1,0,0,0,0,5,0,9,0,15,5,7,6,4,0,1,3,1,2,3,12,1,0,0,0,0,0,0,0,0,3,1,0,0,0,1,0,0,0,0,0,9,2,4,4,3,11,4,7,0,1,0,0,1,11,23,0]},
    {name:"贾政",ename:"Jia Zheng",family:["JIA"],intro:"贾宝玉的父亲。",values:[0,2,6,5,0,0,0,0,8,0,0,1,3,3,8,6,82,16,1,0,0,26,19,0,12,2,0,0,0,0,0,0,36,0,2,2,4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,3,4,3,4,0,28,1,3,30,2,0,18,3,12,48,17,4,1,1,4,0,5,32,39,9,14,21,13,2,38,7,0,0,0,35,39,33,42,2,13,6,9,34,2,21,32,14,1,4,0,37]},
    {name:"王夫人",ename:"Jia Furen",family:["WANG","JIA"],intro:"贾宝玉的母亲。",values:[0,0,20,11,1,3,14,3,3,0,20,3,14,1,4,4,4,10,0,1,4,3,15,2,29,0,1,16,6,9,9,14,14,17,14,19,2,7,4,17,8,3,15,4,1,9,6,1,4,0,6,5,8,7,8,5,10,6,4,1,0,5,0,5,0,0,5,1,5,5,6,1,2,24,9,7,45,17,3,9,20,4,4,19,4,3,0,2,3,3,8,2,0,22,30,32,19,23,0,9,5,5,12,11,3,4,7,5,14,8,2,5,2,2,26,13,35,38,70,16]},
    // {name:"赵姨娘",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,0,24,0,1,0,0,0,0,0,0,0,1,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,13,2,1,1,0,22,1,4,0,0,0,0,2,0,0,0,3,5,4,0,0,0,0,0,0,0,3,0,1,5,3,0,0,0,0,0,0,0,0,5,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,10,8,0,0,0,1,1,1,0]},
    {name:"贾琏",ename:"Jia Lian",family:["JIA"],intro:"贾琏为王熙凤之夫",values:[0,1,1,1,0,2,2,0,0,0,1,2,1,1,1,30,3,1,1,0,32,5,14,10,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,36,0,6,12,0,0,0,0,0,3,6,0,0,0,1,1,0,0,0,1,63,44,34,2,5,43,3,2,43,0,3,3,0,1,0,0,0,0,0,20,2,1,1,0,8,0,0,0,6,31,8,14,16,6,0,0,0,27,4,19,2,11,14,7,0,14,7,8,36,13,17,13,8,11,1,16,4]},
    {name:"王熙凤",ename:"Jia Xifeng",family:["WANG","JIA"],intro:"另一女主角，普遍认为是红楼梦中最为鲜活的人物，具有强烈的世俗气息。为贾琏之妻，王夫人的侄女，即宝玉堂嫂及表姐，因此虽然身为邢夫人的媳妇，却帮王夫人处理荣府家务。",values:[0,0,11,0,0,31,36,4,0,2,64,36,27,52,39,34,0,8,1,8,23,15,9,15,20,0,18,11,19,7,3,0,3,2,19,19,0,25,5,39,15,13,25,58,24,28,18,0,17,14,18,1,11,31,18,2,6,1,0,0,7,7,1,12,4,2,55,46,48,8,31,36,6,66,1,1,4,8,2,0,8,4,12,30,11,1,0,39,2,29,1,11,8,7,15,18,33,16,8,2,72,0,0,2,7,13,7,12,8,54,12,16,40,8,0,4,3,1,0,1]},
    // {name:"贾迎春",ename:"Jia Ying Chun",family:["JIA"],intro:"",values:[0,1,3,1,1,0,3,0,0,0,0,0,0,1,0,2,0,2,0,2,0,5,2,0,0,0,2,0,2,0,2,0,1,0,2,0,11,2,0,6,1,0,0,0,1,1,0,0,3,0,0,0,2,0,0,0,1,1,0,0,2,1,0,0,0,0,0,0,1,0,3,0,27,5,1,1,11,2,5,7,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,5,4,0,0,1,0,0,0,1,0,0,0,0]},
    {name:"贾环",ename:"Jia Huan",family:["JIA"],intro:"贾政和赵姨娘的儿子",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,15,0,5,3,3,11,0,0,0,0,0,0,0,6,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,0,14,0,3,0,0,0,0,1,0,0,1,0,5,0,0,6,0,1,4,0,0,0,0,0,7,2,0,2,2,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,4,2,0,5,1,12,8,16,0]},

    {name:"贾宝玉",ename:"Jia Baoyu",family:["JIA"],intro:"荣国府的嫡派子孙，出身不凡，聪明灵秀，阖府捧为掌上明珠，对他寄予厚望，他却走上了叛逆之路，痛恨八股文，批判程朱理学，给那些读书做官的人起名“国贼禄蠹”。",values:[1,2,32,0,62,15,29,83,35,5,10,1,11,16,57,25,60,27,116,55,49,42,54,40,51,70,27,97,43,71,60,31,36,42,72,49,37,16,23,12,22,9,34,12,20,16,10,11,36,28,42,73,10,35,5,43,58,42,9,24,10,74,57,37,1,13,22,0,1,48,8,2,17,25,12,3,81,70,26,23,67,63,4,46,65,23,38,8,65,11,30,22,17,35,46,44,48,67,11,15,18,9,0,16,6,8,6,50,73,7,8,5,30,27,70,76,39,62,36,40]},
    {name:"贾探春",ename:"Jia Tanchun",family:["JIA"],intro:"贾宝玉的庶出妹妺，住在秋爽斋，在诗社中号为“蕉下客”。占花名签得杏花。有着超卓的才干，远大的眼光，以及敢作敢为的个性。",values:[0,1,4,0,1,0,4,0,0,0,0,0,0,0,0,0,0,3,0,1,0,3,4,0,0,0,14,2,3,0,0,0,0,0,2,0,17,4,3,9,0,3,1,0,4,1,2,10,12,7,1,1,0,0,40,24,0,4,0,13,5,36,10,0,0,0,0,0,0,14,5,0,21,23,12,2,1,0,0,0,13,11,17,2,2,2,5,0,0,1,0,1,0,11,4,0,0,9,2,10,2,8,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,1,9,0]},
    {name:"林黛玉",ename:"Jia Daiyu",family:["JIA"],intro:"金陵十二钗之冠。林如海与贾敏之女，宝玉的姑表妹，寄居荣国府",values:[0,1,77,3,9,0,5,23,4,0,0,3,2,0,0,7,9,7,33,24,14,29,18,6,27,17,13,47,35,28,17,16,0,16,15,15,14,13,1,13,9,26,1,2,27,1,0,27,27,25,1,13,1,4,1,0,40,7,7,2,0,20,17,17,1,0,23,0,0,21,3,0,4,1,0,40,0,5,11,0,9,70,31,1,18,16,38,0,43,23,18,3,0,12,7,36,50,29,2,6,0,1,0,3,0,0,0,3,5,0,0,0,0,0,1,3,0,1,0,1]},
    {name:"贾惜春",ename:"Jia Xichun",family:["JIA"],intro:"宁府贾珍之妹，在荣府长大，是众同辈姊妹中年纪最小的一个。住在藕香榭周围的蓼风轩，在诗社中号为“藕榭”。",values:[0,1,1,0,1,0,6,0,0,0,0,0,0,0,0,0,0,1,0,1,0,2,3,0,1,0,2,1,2,0,0,0,0,0,2,0,2,1,1,4,0,4,0,0,1,1,0,3,1,6,0,1,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,1,0,1,0,0,20,3,1,0,0,0,0,0,4,0,0,1,3,19,8,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,3,4,1,16,20,1,0,17,3,3,4,5,0]},
    {name:"史湘云",ename:"Shi Xiangyun",family:["SHI"],intro:"贾宝玉远房表妹史湘云",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,15,16,0,0,0,0,0,0,2,0,39,23,1,0,3,8,25,19,2,8,3,1,0,0,0,0,0,0,27,39,0,2,1,7,1,5,11,7,2,1,0,25,12,0,0,0,0,0,0,9,7,0,0,0,1,40,0,0,0,0,0,10,8,0,2,0,4,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,20,1,2,0,0,0,0,0,0,0,0,1,0]},
    {name:"薛姨妈",ename:"Xue Yima ",family:["WANG","XUE"],intro:"王家人，薛蟠的母亲",values:[0,0,0,3,0,0,6,25,0,0,0,0,0,0,0,7,1,2,0,1,0,2,0,0,4,0,0,0,3,0,0,0,1,8,20,6,0,5,0,19,11,0,5,1,0,4,21,11,1,11,0,2,5,8,0,0,37,4,8,1,0,12,1,0,0,2,11,0,0,0,1,0,0,0,1,0,1,3,1,11,0,1,11,24,26,22,1,1,1,3,30,6,0,0,6,0,19,14,7,5,0,0,26,0,0,1,0,11,4,1,0,1,0,0,0,0,0,0,2,18]},
    {name:"薛宝钗",ename:"Xue Baochai",family:["XUE","JIA"],intro:"金陵十二钗之冠，来自四大家族之薛家，薛姨妈之女，宝玉的姨表姐。她是一个复杂的矛盾纠葛体。",values:[0,0,0,2,5,0,8,20,0,0,0,0,0,0,0,1,1,9,2,17,7,23,2,1,11,7,21,25,9,15,10,25,2,29,33,23,29,11,3,8,7,28,2,4,15,2,3,32,26,18,2,7,1,2,7,17,38,4,3,1,0,24,9,5,1,0,20,0,0,15,3,0,5,1,7,2,4,4,2,5,0,2,12,6,14,8,5,0,1,2,8,3,0,0,4,1,20,31,5,14,21,6,12,5,1,5,1,15,46,4,5,3,6,10,16,7,18,29,20,22]},


    {name:"贾珍",ename:"Jia Zhen",family:["JIA"],intro:"宁府贾珍，在荣府长大.",values:[0,1,0,2,1,0,3,0,3,16,9,1,42,8,8,4,17,1,2,0,0,0,2,0,2,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,6,1,0,0,0,0,36,11,0,0,0,1,1,0,0,0,14,31,22,2,1,5,3,0,3,0,0,0,27,1,0,0,0,0,0,0,5,0,1,0,0,21,1,0,0,0,0,0,0,0,1,0,0,0,0,14,0,3,1,1,12,1,0,1,2,0,0,0,0,0,0,0,0,3]},
    {name:"尤氏",ename:"You Shi",family:["JIA"],intro:"贾珍之妻",values:[0,0,0,0,1,0,14,1,0,16,30,0,5,3,0,2,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,9,0,0,0,0,0,0,0,2,16,5,0,0,3,6,1,3,0,8,7,7,3,1,0,15,8,1,33,0,2,13,56,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,3,0,0,0,2,5,5,0,1,1,3,0,0,6,1,1,2,1,0]},
    {name:"贾蓉",ename:"Jia Rong",family:["JIA"],intro:"贾珍之子",values:[0,1,0,0,2,6,11,0,3,16,13,5,4,0,2,6,0,1,0,0,0,0,0,0,1,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,7,0,0,0,0,0,24,5,0,0,0,1,0,0,0,0,16,31,3,0,0,20,7,0,0,0,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,14,0,0,1,1,3,0,0,2,0,1,0,0,1,1,0,0,0,2]},



    {name:"薛蟠",ename:"Xue Pan",family:["XUE"],intro:"薛宝钗愚蠢纵玩的哥哥薛蟠",values:[0,0,1,18,0,0,0,0,10,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,2,18,0,29,1,0,0,0,0,15,9,0,0,0,0,0,0,0,0,0,0,0,42,13,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,9,18,0,0,0,0,0,0,0,4,0,0,0,13,34,0,0,2,0,1,13,0,0,0,2,4,0,0,0,1,0,2,0,13,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]},
    {name:"夏金桂",ename:"Xia Jingui ",family:["JIA"],intro:"薛蟠之妻",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,44,0,0,11,2,2,0,0,0,0,6,32,0,0,0,0,0,0,0,0,19,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    {name:"香菱",ename:"Xiang Ling ",family:["JIA"],intro:"甄士隐之女，原名英莲，幼时被拐走，长大后被卖给薛家，成为服侍薛蟠的小妾。",values:[0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,7,0,0,0,1,0,0,0,4,1,0,2,1,2,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,1,40,12,1,0,1,0,0,0,0,1,3,0,0,0,38,8,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,18,40,1,3,4,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,45,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,3]},
    // {name:"宝蟾",ename:"Jia ",family:["XUE"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,11,0,0,0,0,0,0,10,24,0,0,0,0,0,0,0,0,11,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    // {name:"薛蝌",ename:"Jia ",family:["XUE"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,4,0,0,0,0,6,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,7,0,0,0,15,28,0,0,0,0,0,4,0,0,19,0,0,1,0,6,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1]},
    // //ok
    // {name:"邢岫烟",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,4,0,1,2,0,0,0,17,3,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,0,15,0,2,0,6,10,0,0,0,1,0,0,0,0,0,0,0,0,1,4,0,0,0,0,0,0,0,0,0,0,0]},
    //ok
    // {name:"薛宝琴",ename:"Jia ",family:["XUE"],intro:"是薛姨妈的侄女，薛蝌的胞妹，薛宝钗的堂妹。后来嫁与梅翰林之子。",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,21,1,12,4,1,0,0,1,4,0,1,0,14,3,0,0,0,0,0,0,10,8,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,2,0,1,4,0,0,0,0,3,0,1,0,0,0,0,0,0,0,0,0,0]},
    //ok


// 是秦业从养生堂抱来的养女，贾珍之儿媳，贾蓉之妻。名字谐音为“情可轻”，处理宁府家务，待下宽和，不落褒贬。

    {name:"袭人",ename:"Xi Ren ",family:["JIA"],intro:"贾宝玉房中的大丫鬟，本姓花，名蕊珠（或珍珠，脂批云与贾母另一丫鬟“琥珀”成对），后宝玉因见古诗“花气袭人知骤暖”而改其名。",values:[0,0,9,0,3,11,0,5,5,0,0,0,2,0,0,0,1,0,55,14,24,9,7,7,6,10,3,13,13,15,37,35,5,51,18,42,19,4,9,1,8,0,7,4,0,18,0,0,5,2,21,5,3,5,6,3,14,15,12,9,8,36,38,7,0,0,22,0,0,6,5,0,3,6,0,0,29,5,1,0,12,27,16,0,32,6,3,0,26,0,1,13,0,25,25,22,14,9,2,11,4,1,0,17,0,1,0,24,31,0,3,0,3,2,5,4,20,13,8,30]},
    {name:"晴雯",ename:"Qing Wen ",family:["JIA"],intro:"荣国府的丫鬟。长得风流灵巧，口齿伶俐，针线活犹好。她的反抗性最强，蔑视王夫人为笼络小丫头所施的小恩小惠，嘲讽向主子讨好邀宠的袭人，抄检大观园时当众把王善保家的痛骂一顿。",values:[0,0,0,0,1,0,0,5,1,0,0,0,0,0,0,0,0,0,1,6,0,0,0,0,0,5,3,1,0,1,20,0,0,13,1,1,9,0,0,0,0,0,0,0,0,0,0,0,2,0,30,44,5,0,0,0,4,10,4,3,2,9,22,8,0,0,4,0,0,5,0,0,8,14,0,1,39,15,5,0,0,2,0,0,0,0,1,0,2,0,0,3,0,2,0,0,0,0,0,0,5,3,0,2,0,0,0,0,13,0,0,0,0,0,0,8,0,0,0,0]},
    {name:"鸳鸯",ename:"Yuan Yang ",family:["JIA"],intro:"贾宝玉祖母贾母的心腹丫鬟。在贾府众多丫鬟中，她的地位最高，是贾母身边不能缺少的人。",values:[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,1,0,0,0,2,1,2,1,0,0,0,3,0,12,2,62,5,8,6,3,0,48,13,0,0,2,0,5,1,2,0,1,1,0,3,0,0,4,0,0,0,3,0,0,3,2,26,27,0,5,8,1,1,1,0,0,1,2,2,2,0,0,0,12,0,0,0,0,0,8,3,0,7,0,0,2,0,0,0,0,0,5,4,30,11,24,21,4,0,0,0,14,0,0,0,1]},
    {name:"麝月",ename:"She Yue ",family:["JIA"],intro:"贾宝玉的丫鬟",values:[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,10,8,0,1,1,0,0,1,0,0,1,6,0,0,1,2,1,3,0,0,0,0,0,0,0,0,1,0,0,1,0,30,28,1,9,0,1,0,6,4,1,0,3,9,1,0,0,2,0,0,2,0,0,4,4,0,0,2,7,0,0,5,2,0,0,9,0,0,0,11,0,0,4,0,9,3,0,0,0,0,0,2,0,0,1,0,0,0,0,14,0,0,0,7,0,1,8,0,4,0,0]},
    // {name:"秋纹",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,8,0,0,0,0,0,0,1,0,0,1,3,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,10,6,0,0,0,0,0,0,0,1,1,0,0,2,0,0,0,0,0,0,1,0,0,1,4,0,0,0,8,0,0,1,1,0,0,1,0,1,2,0,2,1,5,4,0,0,0,4,0,0,0,0,0,0,3,0,0,0,0,1,0,1,0,0,4,1,3]},
    {name:"平儿",ename:"Ping Er ",family:["JIA"],intro:"王熙凤的陪嫁丫鬟，贾琏的妾。对王熙凤忠心耿耿，并助理荣府诸事，但平儿聪颖善良，常暗中帮助他人。",values:[0,0,0,0,0,12,5,0,0,0,5,1,3,2,0,9,0,0,0,0,28,0,0,1,3,0,1,0,1,0,1,0,0,0,1,2,0,7,36,0,0,9,7,60,12,26,6,11,6,1,4,8,1,0,38,16,1,0,5,6,26,23,8,1,1,0,20,3,17,0,5,20,10,20,0,0,0,0,0,0,0,0,1,8,0,0,0,8,0,9,0,1,6,13,0,0,14,0,0,0,22,1,0,0,4,6,6,1,2,2,6,2,32,9,0,0,5,11,36,1]},
    {name:"芳官",ename:"Fang Guan",family:["JIA"],intro:"贾宝玉的丫鬟",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,32,5,44,16,13,25,10,0,0,0,0,0,0,0,0,0,0,0,0,8,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]},
    // {name:"茗烟",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,4,0,0,17,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,23,0,0,0,2,0,0,0,2,1,0,0,0,1,0,0,0,0,0,0,1,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    // {name:"林之孝",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,3,9,0,0,0,0,0,0,0,0,0,0,1,0,6,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,18,0,0,0,1,0,0,0,0]},
    // {name:"林之孝家的",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,3,0,0,0,0,0,0,0,0,1,0,0,1,2,0,0,0,13,10,9,1,0,0,0,0,0,0,14,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,8,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    // {name:"司棋",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,3,0,0,0,0,0,0,0,0,8,9,5,6,0,0,18,1,1,0,0,1,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    // {name:"雪雁",ename:"Jia ",family:["JIA"],intro:"",values:[0,0,2,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,3,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,6,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,14,7,0,1,1,17,0,17,22,1,0,0,2,0,0,37,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    {name:"紫鹃",ename:"Zi Juan ",family:["JIA"],intro:"原名鹦哥（脂批云与贾母另一丫鬟“鸳鸯”成对），是贾母身边的二等丫环。黛玉来贾家后，贾母将紫鹃派去服侍黛玉，名字与黛玉带来的小丫头“雪雁”成对。",values:[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,5,2,0,10,5,0,0,0,0,5,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,63,0,4,0,0,1,0,5,0,0,5,0,0,8,0,0,0,2,0,5,0,0,1,0,1,35,26,0,4,5,15,0,31,29,5,0,0,10,3,18,61,13,0,3,0,0,0,5,0,0,0,0,0,0,1,0,24,0,1,3,2,9,2,0]},
    {name:"莺儿",ename:"Ying Er ",family:["XUE"],intro:"薛宝钗的丫鬟",values:[0,0,0,0,0,0,1,4,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,1,1,0,1,0,0,0,0,0,40,0,0,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,1,4,2,0,26,5,0,2,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,2,2,0,0,0,0,0,0,0,1,0,2,1,0,2,0,0,0,0,0,0,12,3,0]}],







                       // dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
                        // dates: Array(120/3).fill(null).map((_, h) => (h+1)*3),
                        dates: Array(120).fill(null).map((_, h) => (h+1)),
                        markLineX : [{chaper:6,event:"刘姥姥一进荣府"},
                                     // {chaper:20,event:"王熙凤正言弹妒意 林黛玉俏语谑娇音"},
                                     {chaper:32,event:"含耻辱情烈死金钏"},
                                     // {chaper:36,event:"绣鸳鸯梦兆绛云轩 识分定情悟梨香院"},
                                     // {chaper:40,event:"史太君两宴大观园"},
                                     // {chaper:52,event:"刘姥姥一进荣府"},
                                     {chaper:65,event:"贾二舍偷娶尤二姨 尤三姐思嫁柳二郎"},
                                     // {chaper:70,event:"刘姥姥一进荣府"},
                                     // {chaper:77,event:"刘姥姥一进荣府"},
                                     // {chaper:79,event:"刘姥姥一进荣府"},
                                     // {chaper:87,event:"刘姥姥一进荣府"},
                                     // {chaper:97,event:"林黛玉焚稿断痴情 薛宝钗出闺成大礼"},
                                     {chaper:105,event:"锦衣军查抄宁国府"}],
                        markLineY : [50,100,150,200]
};

var familyColor = {
    JIA:"rgba(255,255,255,0.8)",//#a8db34
    SHI:"#7A3DC5",
    WANG:"#E13E95",
    XUE:"#2BACE2"
    // JIA:"#a8db34",//
    // SHI:"#29af7f",
    // WANG:"#2a778e",
    // XUE:"#65D3B3"
}


const svg3 = d3.select("#visualisationC")
               svg3 .append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("rx", 5)
                    .attr("width", 320)
                    .attr("height", 120)
                    // .style("fill","rgba(255,255,255,0.1)")
                    .style("fill","#333")
                    // .attr("stroke","#fff")
                    .attr("stroke-width", 1.5)

svg3.append("defs")
        .append("clipPath")
        .attr("id", "rectClip")
        .append("circle")
        .attr("cx",60)
        .attr("cy",60)
        .attr("r",30)
        .attr("fill", "red");

    const eachCharacter = 
    svg3.selectAll("image")
        .data(data.series)
        .enter()
        .append("image")
        .attr("x", 20)
        .attr("y", 20)
        .attr("clip-path","url(#rectClip)")
        .attr("width", 80)
        .attr("height", 80)
        .attr("xlink:href", d=>"assets/img/"+d.name+".jpg")
        .attr("opacity", "0");
    const eachCharacterText = 
    svg3

    .selectAll("text")
        .data(data.series)
        .enter()
        .append("text")
        .append("tspan")
        .text(d => d.name + "   "+d.ename)
        .style("font", "14px sans-serif")
        .style("fill","#fff")
        .attr("x",110)
        .attr("y", 40)
        .attr("opacity", "0")
    
    // svg3   
    // .append("g")
    //     .selectAll("text")
    //     .attr("class", "intro")
    //     .data(data.series)
    //     .enter()
    //     .append("text")

    //     .append("p")
    //     .style("text-anchor","middle")
    //     // .attr("x",text.attr("x"))
    //     // .attr("dy","1em")
    //     // .text(function(d){
    //     //     return d.intro.split("，");
    //     // })
    //     .attr("x",120)
    //     .attr("y", 60)
    //     .text(d => d.intro)
        // .style("font", "14px sans-serif")
        // .style("fill","#aaa")
        
        // .attr("opacity", "1")

        

        
    // eachCharacter.filter(d=>d.name ==="贾宝玉").attr("opacity", "1");
    // d.attr("xlink:href")==="assets/img/贾宝玉.jpg") .attr("opacity", "1"
    const svg = d3.select("#visualisation"),
        WIDTH = 1300,
        HEIGHT = 420,
        MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 630
    },

    xScale = d3.scaleLinear()
                .range([MARGINS.left, WIDTH - MARGINS.right])
                .domain([1, 120]),


    yScale = d3.scaleLinear()
                .range([HEIGHT - MARGINS.top, MARGINS.bottom])
                // .domain([0, 250]),
                .domain([0, 120]),


    xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(7),


    yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(7);
    // .orient("left");


    // yAxis = g => g
    //     .attr("transform", `translate(${MARGINS.left},0)`)
    //     .call(d3.axisLeft(yScale).ticks(7))
    //     .call(g => g.select(".domain").remove())
    //     .call(g => g.select(".tick:last-of-type text").clone()
    //         .attr("x", 3)
    //         .attr("text-anchor", "start")
    //         .attr("font-weight", "bold")
            
    //         .text(data.yScale));


                    
                      //  svg.append("g")
                      //     .call(xAxis);

                      // svg.append("g")
                      //     .call(yAxis);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
        .call(yAxis);
    


    var a = 
            d3.color("#EE2E7C");  
            // d3.color("#453581");  
    var b = 
            d3.color("#2BACE2"); 
            // d3.color("#a8db34");   

    var compute = d3.interpolate(a,b);
    var defs = svg.append("defs");

    var linearGradient = defs.append("linearGradient")
                            .attr("id","linearColor")
                            .attr("x1","0%")
                            .attr("y1","0%")
                            .attr("x2","0%")
                            .attr("y2","100%");

    var stop1 = linearGradient.append("stop")
                    .attr("offset","0%")
                    .style("stop-color",a.toString());

    var stop2 = linearGradient.append("stop")
                    .attr("offset","100%")
                    .style("stop-color",b.toString());

    //添加一个矩形，并应用线性渐变
    var colorRect = svg.append("rect")
                    .attr("x", MARGINS.left)
                    .attr("y", 10)
                    .attr("width", 0.5)
                    .attr("height", 400)
                    .style("fill","#fff")
                    // .style("fill","url(#" + linearGradient.attr("id") + ")");
    var yellowGreen = d3.interpolateYlGn(0.5);
    var lineGen = d3.line()

        .defined(d => !isNaN(d))
        .x((d, i) => xScale(data.dates[i]))
        .y(d => yScale(d))
        .curve(d3.curveStep)

        // .curve(d3.curveStep());
         // .curve(d3.curveCatmullRom.alpha(0.5));
         // .curveLinear()
    var myColor = d3.interpolate("#EE2E7C","#2BACE2");

    const path = svg.append("g")
        .attr("fill", "none")
        // .attr("stroke", "steelblue")
        .attr("stroke","url(#" + linearGradient.attr("id") + ")")
        .attr("stroke-width", 1.2)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .selectAll("path")
        .data(data.series)
        .enter().append("path")
        // .style("mix-blend-mode", "multiply")
        .attr("d", d => lineGen(d.values));


        

   


                                                            // path
                                                            //     .transition()
                                                            //     .delay(function(d) { return 50; })
                                                            //     .on("start", function repeat() {
                                                            //         let thisColor = d3.select(this).attr("stroke");
                                                            //         d3.active(this)
                                                            //             .style("stroke", "#E371C2")
                                                            //           .transition()
                                                            //             .style("stroke", "#453581")
                                                            //           .transition()
                                                            //             .style("stroke", thisColor)
                                                            //         })

                                                                        
            
                                                                      // .transition()
                                                                      //   .on("start", repeat);

    var myLineGen = d3.line()
        .defined(d => !isNaN(d))
        .x((d, i) => xScale(data.dates[i]))
        .y(d => yScale(d))

    var pathXg = svg.append("g");
        // .attr("fill", "none")
        // // .attr("stroke", "steelblue")
        // .attr("stroke","url(#" + linearGradient.attr("id") + ")")
        
        pathXg
        .selectAll("line")
        .data(data.markLineX)
        .enter().append("line")
        // .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "5 5")
        .style("stroke","#fff")
        .style("stroke-width",0.4)
        .style("opacity",0.4)
        .attr("x1", function(d, i) {
          return xScale(d.chaper);
        })
        .attr("x2", function(d, i) {
          return xScale(d.chaper);
        })
        .attr("y1", function(d, i) {
            return HEIGHT - MARGINS.top+100;
        })
        .attr("y2", function(d, i) {
          return MARGINS.bottom;
        })
        pathXg
        .selectAll("circle")
        .data(data.markLineX)
        .enter()
        .append("circle")
        .attr("class", "oooo")
        .style("r",7)
        .style("fill","rgba(255,255,255,0.9)")
        // .style("stroke","#fff")
        .style("stroke-width",2)
        .attr("cx", function(d, i) {
          return xScale(d.chaper);
        })
        .attr("cy", function(d, i) {
          return MARGINS.bottom+480;
        })


        pathXg
        .selectAll("text")
        .data(data.markLineX)
        .enter()
        .append("text")
        .attr("font-family", "Arial Black,Arial Bold,Gadget,sans-serif")
        .style("text-anchor","middle")
        .style("fill","#242A2E")
        .style("font-size","10px")
        .style("font-weight",600)
        .text((d,i) => i+1)
        .attr("x", function(d, i) {
          return xScale(d.chaper);
        })
        .attr("y", function(d, i) {
          return MARGINS.bottom+480;
        })
        .attr("dy", ".35em")

        pathXg
        .append("g")
        .selectAll("text")
        .data(data.markLineX)
        .enter()
        .append("text")
        .text((d,i) => d.event)
        .style("fill","#aaa")
        .attr("font-family", "Arial Black,Arial Bold,Gadget,sans-serif")
        .style("text-anchor","middle")
        .style("font-size","12px")
        .style("font-weight",600)
        // .text((d,i) => i+1)
        .attr("x", function(d, i) {
          return xScale(d.chaper);
        })
        .attr("y", function(d, i) {
          return MARGINS.bottom+520;
        })
        
       


    //var pathY =  
        // var lineGen = d3.svg.line()
        // //.defined(d => !isNaN(d))
        // // .x((d, i) => x(data.dates[i]))
        // .x((d,i) => xScale(i))
        // .y((d,i) => yScale(d.words));
        // .interpolate("basis");





    



var padding = 20,
  ncol = 20,
  nrow = 4,
  row_height = (HEIGHT+80) / nrow,
  col_width = WIDTH / ncol,
  max_radius = 25;



  var svg2 = d3.select("#visualisationB").append("svg")
var arc = d3.arc();

    arc.startAngle(d => d.x0)
    .endAngle(d => d.x1)
    // .padAngle(0)
    // .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    // .padRadius(15)
    .innerRadius(d => d.y0 )
    .outerRadius(d => Math.max(d.y0, d.y1));


var circles2 = svg2
    .attr("width", 500)
    .attr("height", 600)
    .selectAll("g")
    .data(data.series)
    .enter().append("g")
    .attr("class", "circles2")
    .attr('transform', (d,i)=>'translate('+Math.ceil((i+1) / nrow) * col_width+','+((i % nrow) * row_height+50)+')')
    ;
    
    var circles2a =circles2
    .append("path")
    .attr("fill", d=>familyColor[d.family[0]])
    .attr("name", d=>d.name)
    // .attr("d", arc(myCircleExample2))
    .attr("d", function(d) { 
        console.log(d);
        let num = 0;
        for(let i = 0; i < d.values.length;i++) {
            num += d.values[i];
        }
        let ob = {
            x0: 0,
            x1: Math.PI,
            y0: Math.sqrt(num/2)-6,
            y1: Math.sqrt(num/2)
        }
        console.log(ob);
        return arc(ob);

    })
    .style("opacity",0)
    // .attr("stroke",0);


    var circles2b = circles2
    .append("path")
    // .attr("fill", d=>familyColor[d.family])
    .attr("fill", function(d) {
        if (familyColor[d.family[1]]) {
            return familyColor[d.family[1]];
        }
        return familyColor[d.family[0]];
    })
    .attr("class", "circles3")
    .attr("name", d=>d.name)
    .attr("d", function(d) { 
        console.log(d);
        let num = 0;
        for(let i = 0; i < d.values.length;i++) {
            num += d.values[i];
        }
        let ob = {
            x0: Math.PI,
            x1: Math.PI*2,
            y0: Math.sqrt(num/2)-6,
            y1: Math.sqrt(num/2)
        }
        console.log(ob);
        return arc(ob);
    })
    .style("opacity",0)


var c = 
            d3.color("#2BACE2");  
            // d3.color("#453581");  
    var d = 
            d3.color("#EE2E7C"); 
            // d3.color("#a8db34");   

    var sizeCompute = d3.interpolate(c,d);

var sizeLinear = d3.scaleLinear()
                .domain([0,63])
                .range([0,1]);
var circles = svg2
    .attr("width", 500)
    .attr("height", 600)
    .selectAll("circle")
    .data(data.series)
    .enter().append("circle")
    .attr("class", "occ")
    .attr("name", d=>d.name)
    // .style("stroke",d => familyColor[d.family])
    .style("stroke-width",0)
    .attr("fill", function(d,i) { 
        let num = 0;
        for(let i = 0; i < d.values.length;i++) {
            num += d.values[i];
        }
        return sizeCompute(sizeLinear(Math.sqrt(num))); 
    })
    
    .attr("r", function(d) { 
        let num = 0;
        for(let i = 0; i < d.values.length;i++) {
            num += d.values[i];
        }
        return Math.sqrt(num/2);
    })

    .attr("cx", function(d, i) {
      return Math.ceil((i+1) / nrow) * col_width;
    })
    .attr("cy", function(d, i) {
      return (i % nrow) * row_height+50;
    })
    .on("click",function (d) {
        d.style("opacity",0.5);
    })





    







   circles.on("mouseenter",function (d) {

        const s = checkClick(d);
            console.log(s);
            path.attr("stroke", function(d) {
              if(d===s) {
                
                return null;
              } else
              return "#333";
            })
            .filter(d => d === s)


            .raise();
            // let thisColor = d3.select(this).attr("fill");
            if(buttonControl ===0) {
                circles.filter(s=> d === s)
                 .transition()
                .duration(100)
                .style("fill-opacity",0.4)
            } else {
                circles.filter(s=> d === s)
                 .transition()
                .duration(100)
                .style("fill-opacity",0.4)
            }
            
            eachCharacter
            .filter(d=>d.name ===s.name).attr("opacity", "0.8");
            eachCharacterText
            .filter(d=>d.name ===s.name).attr("opacity", "0.8");
            document.getElementById('intro').innerHTML = "<p>"+s.intro+"</p>";

    })
   circles.on("mouseleave",function (d) {

        const s = checkClick(d);
        if(buttonControl === 0) {
            circles.filter(s=> d === s)
             .transition()
            .duration(100)
            .style("fill-opacity",1);
        }
        else {
            circles.filter(s=> d === s)
             .transition()
            .duration(100)
            .style("fill-opacity",0);
        }
            eachCharacter
            .filter(d=>d.name ===s.name).attr("opacity", "0");
             eachCharacterText
            .filter(d=>d.name ===s.name).attr("opacity", "0");
            document.getElementById('intro').innerHTML = "";
    })




    svg2.append("g")
    .selectAll("circle")
    .data(data.series)
    .enter()
    .append("circle")
    .style("fill","#fff")
    .attr("r", 1.8)
    .attr("cx", function(d, i) {
      return Math.ceil((i+1) / nrow) * col_width;
    })
    .attr("cy", function(d, i) {
      return (i % nrow) * row_height+50;
    })




    svg2
    .append("g")
    .selectAll("line")
    .data(data.series)
    .enter()
    .append("line")
    .style("stroke","#fff")
    .style("stroke-width",0.5)
    .attr("x1", function(d, i) {
      return Math.ceil((i+1) / nrow) * col_width;
    })
    .attr("x2", function(d, i) {
      return Math.ceil((i+1) / nrow) * col_width;
    })
    .attr("y1", function(d, i) {
        return (i % nrow) * row_height+50;
    })
    .attr("y2", function(d, i) {
      return (i % nrow) * row_height+18;
    })





    



    // circles.transition()
    // .delay(function(d, i) { return i * 50; })
    // .on("start", function repeat() {
    //     d3.active(this)
    //         .style("fill", "#E371C2")
    //       .transition()
    //         .style("fill", "#453581")
    //       .transition()
    //         .style("fill", "#a8db34")
    //       // .transition()
    //       //   .on("start", repeat);
          
    //   })
    svg2.append("g")
    .selectAll("text")
    .data(data.series)
    .enter().append("text").append("tspan")
    .text(function(d) {
        let num = 0;
        for(let i = 0; i < d.values.length;i++) {
            num += d.values[i];
        }
        
        function numsToString(n){
           var b=parseInt(n).toString();
           var len=b.length;
           if(len<=3){return b;}
           var r=len%3;
           return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
        }
        return numsToString(num); 
    })
    .style("font", "12px sans-serif")
    .style("font-family","Arial Black,Arial Bold,Gadget,sans-serif")
    .style("font-weight", "bolder")
    .style("fill","rgba(255,255,255,0.8")
    .attr("x", function(d, i) {
      return Math.ceil((i+1) / nrow) * col_width-12;
    })
    .attr("y", function(d, i) {
      return (i % nrow) * row_height+10;
  })

    



    //   
    svg2.append("g")
    .selectAll("text")
    .data(data.series)
    .enter().append("text").append("tspan")
    .text(d => d.name)
    .style("font", "12px sans-serif")
    .style("fill","#aaa")

    // .attr("class", "occ")
    // .attr("fill", function(d,i) { return "#fff"; })
   
    .attr("x", function(d, i) {
        // console.log("x: "+Math.ceil((i+1) / nrow) * col_width);
      return Math.ceil((i+1) / nrow) * col_width-15;
    })
    .attr("y", function(d, i) {
        // console.log("y: "+(i % nrow) * row_height);
      return (i % nrow) * row_height+100;
  })


      
    // .data(data.series.name)
    // .enter()
    // .append("tspan")
    
    //  .attr("x", 50)
    //   .attr("y", 100)
    var checkClick  = function(d) {
        for (var kok = 0; kok < data.series.length; kok++) {
            if(data.series[kok]===d) {
                // console.log(data.series[kok]);
                return data.series[kok];
            }
        }
    }

    circles.on("click",function (d) {

        const s = checkClick(d);

            path.attr("stroke", function(d) {
              if(d===s) {
                
                return null;
              } else
              return "#333";
            })
            .filter(d => d === s)

            .raise();
            let thisColor = d3.select(this).attr("fill");
            circles.filter(s=> d === s)
            // .style("fill", "#E371C2")
            // .transition()
            // .duration(750)
            .style("fill", "rgba(0,0,0,0.2)")
            .transition()
            .duration(750)
            .style("fill",thisColor)

            // console.log(d.attr("fill"));
            // .style("fill",)
    })




    // const myCircle = d3.select("#visualisationB")
    //     .append("div")
    //     .attr("class", "myBottom")
    //     .selectAll("p")
    //     .data(data.series)
    //     .enter().append("p")
    //     .style("font-size", "10px")
    //     .text(function(d){return d.name})

    //     .on("click",function(d){

    //         const s = checkClick(d);
    //         path.attr("stroke", function(d) {
    //           if(d===s) {
                
    //             return null;
    //           } else
    //           return "#333";
    //         })
    //         .filter(d => d === s)
    //         .raise()

    //         });
     

                      

    svg.call(hover, path);
    function hover(svg, path) {
        svg
          .style("position", "relative");

        if ("ontouchstart" in document) svg
          .style("-webkit-tap-highlight-color", "transparent")
          .on("touchmove", moved)
          .on("touchstart", entered)
          .on("touchend", left)
        else svg
          .on("mousemove", moved)
          .on("mouseenter", entered)
          .on("mouseleave", left);

        const dot = svg.append("g")
          .attr("display", "none");

        dot.append("circle")
          .style("fill", "#fff")
          .attr("r", 2.5);


        dot.append("text")
          .style("font", "12px sans-serif")
          .style("fill", "#fff")
          .attr("text-anchor", "middle")
          .attr("y", -8);

        function moved() {
            d3.event.preventDefault();
            const ym = yScale.invert(d3.event.layerY);
            const xm = xScale.invert(d3.event.layerX);
            const i1 = d3.bisectLeft(data.dates, xm, 1);
            const i0 = i1 - 1;
            const i = xm - data.dates[i0] > data.dates[i1] - xm ? i1 : i0;
            const s = data.series.reduce((a, b) => Math.abs(a.values[i] - ym) < Math.abs(b.values[i] - ym) ? a : b);
            // console.log(s);
            // path.attr("stroke", d => d === s ? null : "#333")



            path.attr("stroke", function(d) {
              if(d===s) {
                // console.log(s);
                return null;
              } else
              return  "#292929";
            })
                // .filter(d => d === s)
            .filter(function(d) {
              if(d===s) {
                // console.log(this);
                                                    svg2
                                
                                                        .selectAll("circle").style("fill-opacity",1)
                                                    if(buttonControl ===0) {
                                                        circles.filter(s=> d === s)
                                                         .transition()
                                                        .duration(100)
                                                        .style("fill-opacity",0.4)
                                                    } else {
                                                        circles.filter(s=> d === s)
                                                         .transition()
                                                        .duration(100)
                                                        .style("fill-opacity",0.4)
                                                    }

                                                    // svg3.selectAll("image").attr("opacity", "0");
                                                    // eachCharacter
                                                    // .filter(d=>d.name ===s.name)
                                                    // .attr("opacity", "0.8");

                                                    // svg3.selectAll("tspan").attr("opacity", "0");
                                                    // eachCharacterText
                                                    // .filter(d=>d.name ===s.name)
                                                    // .attr("opacity", "0.8");
                                                    // document.getElementById('intro').innerHTML = "<p>"+s.intro+"</p>";
                return d;
              } else {
                // if(buttonControl === 0) {
                //     circles.filter(s=> d === s)
                //      .transition()
                //     .duration(100)
                //     .style("fill-opacity",1);
                // }
                // else {
                //     circles.filter(s=> d === s)
                //      .transition()
                //     .duration(100)
                //     .style("fill-opacity",0);
                // }
                //     eachCharacter
                //     .filter(d=>d.name ===s.name)
                //     .attr("opacity", "0");
                //      eachCharacterText
                //     .filter(d=>d.name ===s.name)
                //     .attr("opacity", "0");
                //     document.getElementById('intro').innerHTML = "";

              }
              
            })
            .raise()


            dot.attr("transform", `translate(${xScale(data.dates[i])},${yScale(s.values[i])})`);
            dot.select("text").text(s.name);
        }

        function entered() {
            // console.log(d);
            path
            // .style("mix-blend-mode", null)
            .attr("stroke", "#333");
            dot.attr("display", null);




            // const s = checkClick(d);
            // if(buttonControl ===0) {
            //     circles.filter(s=> d === s)
            //      .transition()
            //     .duration(100)
            //     .style("fill-opacity",0.4)
            // } else {
            //     circles.filter(s=> d === s)
            //      .transition()
            //     .duration(100)
            //     .style("fill-opacity",0.4)
            // }
            // eachCharacter
            // .filter(d=>d.name ===s.name)
            // .attr("opacity", "0.8");
            // eachCharacterText
            // .filter(d=>d.name ===s.name)
            // .attr("opacity", "0.8");
            // document.getElementById('intro').innerHTML = "<p>"+s.intro+"</p>";
        }

        function left() {
            path
            // .style("mix-blend-mode", "multiply")
            .attr("stroke", null);
            dot.attr("display", "none");
                // const s = checkClick(d);
                // if(buttonControl === 0) {
                //     circles.filter(s=> d === s)
                //      .transition()
                //     .duration(100)
                //     .style("fill-opacity",1);
                // }
                // else {
                //     circles.filter(s=> d === s)
                //      .transition()
                //     .duration(100)
                //     .style("fill-opacity",0);
                // }
                    // eachCharacter
                    // // .filter(d=>d.name ===s.name)
                    // .attr("opacity", "0");
                    //  eachCharacterText
                    // selectAll("text")
                    // .attr("opacity", "0");
                    // document.getElementById('intro').innerHTML = "";


        }
    }





    d3.select("#familySelect")
        .on("click", function(d) {
            buttonControl = 1;
            circles
            // .style("stroke",d => familyColor[d.family])
            // .style("stroke-width",5)
            .style("fill-opacity",0);
            circles2a
            .style("opacity",1);
            circles2b
            .style("opacity",1);

            document.getElementById("familySelect").style.backgroundColor = "#222";
            document.getElementById("allCharachers").style.backgroundColor = "rgba(255,255,255,0.2)";
            // attr("id","active")

            
        });
    d3.select("#allCharachers")
        .on("click", function(d) {
            buttonControl = 0;
            circles
            // .style("stroke",d => familyColor[d.family])
            .style("stroke-width",0)
            .style("fill-opacity",1)
            circles2a
            .style("opacity",0)
            circles2b
            .style("opacity",0);
            document.getElementById("familySelect").style.backgroundColor = "rgba(255,255,255,0.2)";
            document.getElementById("allCharachers").style.backgroundColor = "#222";

            
        });


//     // path.arc(100, 100, 20, 0, 180,true);
//     var myCircleExample = {
//         x0: 0,
//         x1: Math.PI,
//         y0: 15,
//         y1: 20
//     }
//     var arc = d3.arc();

//     arc.startAngle(d => d.x0)
//     .endAngle(d => d.x1)
//     .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
//     .padRadius(15)
//     .innerRadius(d => d.y0 )
//     .outerRadius(d => Math.max(d.y0, d.y1));


// const svgExample = d3.select("#visualisationExample");
//                     // .append(svg);
//      svgExample.append("g")
//     .attr('transform', 'translate(450,15)')
//     .append("path")
//     .attr("class", "hahaha")
//     .attr("fill", "red")

//     .attr("d", arc(myCircleExample));
    

       

}


   
                  InitChart();
