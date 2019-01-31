function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)', 'Velocity (km/h)'],
    [new Date('2016/09/21 16:53:00'), 28, 0.0, 0.0],
    [new Date('2016/09/21 16:53:11'), 28, 0.016165916267745814, 5.290663505807721],
    [new Date('2016/09/21 16:53:15'), 31, 0.02137218275656891, 4.685639839940788],
    [new Date('2016/09/21 16:53:24'), 32, 0.03350369253083545, 4.852603909706614],
    [new Date('2016/09/21 16:53:31'), 31, 0.042407854243715556, 4.579283166624056],
    [new Date('2016/09/21 16:53:42'), 34, 0.055318171021849466, 4.225194581934735],
    [new Date('2016/09/21 16:53:54'), 32, 0.0704745925184061, 4.546926448966988],
    [new Date('2016/09/21 16:54:12'), 44, 0.09578364143056037, 5.061809782430853],
    [new Date('2016/09/21 16:54:31'), 46, 0.1009191898561006, 0.9730512806286749],
    [new Date('2016/09/21 16:54:44'), 46, 0.10196009624287847, 0.2882509994154084],
    [new Date('2016/09/21 16:56:56'), 39, 0.1606646633513064, 1.6010336484116716],
    [new Date('2016/09/21 16:57:19'), 33, 0.19195626689167347, 4.897816206318322],
    [new Date('2016/09/21 16:57:40'), 29, 0.20201776372401503, 1.7248280284014117],
    [new Date('2016/09/21 16:57:50'), 27, 0.21524553666861243, 4.761998260055062],
    [new Date('2016/09/21 16:58:01'), 29, 0.21929482752068305, 1.3252224606776544],
    [new Date('2016/09/21 16:58:18'), 25, 0.24228605965233463, 4.868731510232099],
    [new Date('2016/09/21 16:58:38'), 23, 0.2678513859032121, 4.601758725157948],
    [new Date('2016/09/21 16:59:04'), 20, 0.30121564260619954, 4.619666312721337],
    [new Date('2016/09/21 16:59:18'), 21, 0.3211626520384179, 5.129230996856144],
    [new Date('2016/09/21 16:59:32'), 24, 0.339140022461499, 4.622752394506568],
    [new Date('2016/09/21 16:59:46'), 26, 0.3581200401684222, 4.88057598178025],
    [new Date('2016/09/21 17:00:00'), 26, 0.37722617863817093, 4.913007035078252],
    [new Date('2016/09/21 17:00:15'), 25, 0.39461482021797833, 4.173273979153771],
    [new Date('2016/09/21 17:00:29'), 23, 0.4129522113358058, 4.715329144584202],
    [new Date('2016/09/21 17:00:43'), 24, 0.4361222201281895, 5.95800226089867],
    [new Date('2016/09/21 17:00:57'), 24, 0.4607169607031412, 6.3243618621304405],
    [new Date('2016/09/21 17:01:11'), 19, 0.47865863626879546, 4.613573716882521],
    [new Date('2016/09/21 17:01:29'), 15, 0.50649469309589, 5.567211365418912],
    [new Date('2016/09/21 17:01:43'), 9, 0.5237231874801493, 4.430184270238103],
    [new Date('2016/09/21 17:02:02'), 11, 0.5543238879156377, 5.798027450934639],
    [new Date('2016/09/21 17:02:11'), 9, 0.567628908457689, 5.322008216820519],
    [new Date('2016/09/21 17:02:19'), 10, 0.5784555025006576, 4.8719673193358455],
    [new Date('2016/09/21 17:02:26'), 8, 0.5870242971525118, 4.406808678096467],
    [new Date('2016/09/21 17:02:50'), 15, 0.6239057908007305, 5.532224047232805],
    [new Date('2016/09/21 17:03:01'), 14, 0.6418733647700845, 5.880296935424962],
    [new Date('2016/09/21 17:03:09'), 12, 0.6547030022399638, 5.773336861445685],
    [new Date('2016/09/21 17:03:25'), 10, 0.6755105013429571, 4.68168729817348],
    [new Date('2016/09/21 17:03:37'), 11, 0.6944300069715583, 5.675851688580372],
    [new Date('2016/09/21 17:03:43'), 8, 0.7020471377291453, 4.570278454552212],
    [new Date('2016/09/21 17:03:59'), 8, 0.7314285528581834, 6.6108184040335765],
    [new Date('2016/09/21 17:04:16'), 7, 0.7592228974916541, 5.885861216499668],
    [new Date('2016/09/21 17:04:33'), 10, 0.7866503363699238, 5.8081635271630025],
    [new Date('2016/09/21 17:04:55'), 11, 0.8211960419133789, 5.652933634383574],
    [new Date('2016/09/21 17:05:00'), 9, 0.8278901572048445, 4.819763009855187],
    [new Date('2016/09/21 17:05:16'), 9, 0.8515884053460487, 5.332105831770967],
    [new Date('2016/09/21 17:05:21'), 7, 0.859166318226246, 5.456097273741997],
    [new Date('2016/09/21 17:05:34'), 4, 0.8818931054122582, 6.293571836126458],
    [new Date('2016/09/21 17:05:54'), 4, 0.912203714356375, 5.455909609941039],
    [new Date('2016/09/21 17:06:42'), 4, 0.9671698304602485, 4.1224587077905115],
    [new Date('2016/09/21 17:07:18'), 10, 1.0239129146487513, 5.674308418850288],
    [new Date('2016/09/21 17:07:35'), 5, 1.0462811024534369, 4.7367927115804696],
    [new Date('2016/09/21 17:08:07'), -4, 1.0965307616953062, 5.653086664710286],
    [new Date('2016/09/21 17:08:29'), 2, 1.125013074870209, 4.6607421558932005],
    [new Date('2016/09/21 17:08:34'), 4, 1.131812246917169, 4.8954038738111905],
    [new Date('2016/09/21 17:08:47'), 9, 1.149405309876496, 4.871925127198262],
    [new Date('2016/09/21 17:08:57'), 7, 1.1625151528797457, 4.7195434811698735],
    [new Date('2016/09/21 17:09:07'), 10, 1.1767905050100258, 5.139126766900817],
    [new Date('2016/09/21 17:09:19'), 3, 1.1890831937146333, 3.6878066113822783],
    [new Date('2016/09/21 17:09:31'), 1, 1.2072302753774975, 5.444124498859245],
    [new Date('2016/09/21 17:09:49'), 1, 1.2319478755258149, 4.943520029663493],
    [new Date('2016/09/21 17:10:04'), 4, 1.253821155510144, 5.2495871962389735],
    [new Date('2016/09/21 17:10:28'), 1, 1.2850376470757894, 4.6824737348468055],
    [new Date('2016/09/21 17:10:46'), 6, 1.310269340990491, 5.046338782940349],
    [new Date('2016/09/21 17:10:53'), 9, 1.3235073487182547, 6.808118259992765],
    [new Date('2016/09/21 17:11:04'), 9, 1.3397203915657618, 5.306086750093251],
    [new Date('2016/09/21 17:11:21'), 14, 1.3674661283083667, 5.875567780786886],
    [new Date('2016/09/21 17:11:36'), 11, 1.3875169773850387, 4.812203778401297],
    [new Date('2016/09/21 17:11:49'), 12, 1.4075383095842138, 5.544368916694636],
    [new Date('2016/09/21 17:12:02'), 10, 1.4259454865393888, 5.097372079894648],
    [new Date('2016/09/21 17:12:18'), 8, 1.4486609482317674, 5.110978880785193],
    [new Date('2016/09/21 17:12:36'), 6, 1.4742980449867327, 5.127419350993052],
    [new Date('2016/09/21 17:12:48'), 4, 1.4905750053933424, 4.883088121982902],
    [new Date('2016/09/21 17:13:06'), 7, 1.5162018866915457, 5.125376259640647],
    [new Date('2016/09/21 17:13:26'), 10, 1.5465776622182745, 5.467639594811197],
    [new Date('2016/09/21 17:13:37'), 10, 1.5601527470627552, 4.4427550400118285],
    [new Date('2016/09/21 17:13:48'), 10, 1.5658270395694036, 1.8570411839940528],
    [new Date('2016/09/21 17:14:06'), 10, 1.5837941110125309, 3.5934142886254676],
    [new Date('2016/09/21 17:14:27'), 12, 1.6159287417317496, 5.508793837580357],
    [new Date('2016/09/21 17:14:46'), 11, 1.6433726355609712, 5.1998956729051455],
    [new Date('2016/09/21 17:14:58'), 9, 1.6608333037078853, 5.238200444074197],
    [new Date('2016/09/21 17:15:13'), 8, 1.6825954675926724, 5.2229193323489165],
    [new Date('2016/09/21 17:15:23'), 13, 1.697460762454394, 5.351506150219784],
    [new Date('2016/09/21 17:15:41'), 22, 1.7276527302456903, 6.038393558259248],
    [new Date('2016/09/21 17:15:52'), 25, 1.74661942329708, 6.207281362272993],
    [new Date('2016/09/21 17:16:21'), 25, 1.7939060640451612, 5.870065748037672],
    [new Date('2016/09/21 17:16:35'), 21, 1.8138998680559522, 5.141263888489104],
    [new Date('2016/09/21 17:16:46'), 20, 1.8351281494183733, 6.947437536792378],
    [new Date('2016/09/21 17:16:50'), 18, 1.8409833442234267, 5.269675324548096],
    [new Date('2016/09/21 17:16:56'), 17, 1.8497263382632725, 5.245796423907418],
    [new Date('2016/09/21 17:17:03'), 17, 1.8601332333501417, 5.352117473246972],
    [new Date('2016/09/21 17:17:15'), 19, 1.8799906428032895, 5.9572228359443855],
    [new Date('2016/09/21 17:17:27'), 14, 1.8971558697894233, 5.149568095840154],
    [new Date('2016/09/21 17:17:43'), 13, 1.9219374951185308, 5.575865699049193],
    [new Date('2016/09/21 17:17:58'), 16, 1.946897915168535, 5.990500812001031],
    [new Date('2016/09/21 17:18:11'), 16, 1.9702118559367519, 6.456168212736948],
    [new Date('2016/09/21 17:18:21'), 13, 1.986471888777261, 5.853611822583307],
    [new Date('2016/09/21 17:18:42'), 12, 2.0197345079943356, 5.7021632943556275],
    [new Date('2016/09/21 17:18:55'), 11, 2.041510773799299, 6.030350530605272],
    [new Date('2016/09/21 17:19:02'), 9, 2.0528573696125654, 5.835392132537046],
    [new Date('2016/09/21 17:19:06'), 7, 2.058547552076132, 5.121164217209854],
    [new Date('2016/09/21 17:19:21'), 6, 2.0671615372259704, 2.0673564359612344],
    [new Date('2016/09/21 17:19:35'), 5, 2.0775775381580774, 2.6784002396846915],
    [new Date('2016/09/21 17:19:53'), 5, 2.107963269764531, 6.077146321290695],
    [new Date('2016/09/21 17:20:14'), 2, 2.140197212425741, 5.525818741921759],
    [new Date('2016/09/21 17:20:30'), 3, 2.1602185446249162, 4.504799744814392],
    [new Date('2016/09/21 17:20:42'), 1, 2.177240361298106, 5.1065450019569525],
    [new Date('2016/09/21 17:20:59'), -4, 2.197956752069686, 4.3870003986876025],
    [new Date('2016/09/21 17:21:26'), 1, 2.217418732559049, 2.594930731915058],
    [new Date('2016/09/21 17:21:50'), 1, 2.253315668722331, 5.384540424492342],
    [new Date('2016/09/21 17:21:59'), 3, 2.2675758329570472, 5.704065693886447],
    [new Date('2016/09/21 17:22:07'), 6, 2.2783865699641925, 4.864831653215451],
    [new Date('2016/09/21 17:22:21'), 2, 2.300460167357558, 5.676067901151183],
    [new Date('2016/09/21 17:22:43'), -1, 2.328266691275884, 4.550158459362369],
    [new Date('2016/09/21 17:23:03'), -1, 2.3560951244744976, 5.00911797575047],
    [new Date('2016/09/21 17:23:15'), -1, 2.3723834525398506, 4.886498419605915],
    [new Date('2016/09/21 17:23:44'), 0, 2.3998196137712995, 3.4058682908005444],
    [new Date('2016/09/21 17:23:51'), 1, 2.408582207492017, 4.50647677065464],
    [new Date('2016/09/21 17:24:10'), -1, 2.4204837935317993, 2.255037354906136],
    [new Date('2016/09/21 17:24:36'), -2, 2.432292462459614, 1.6350464669281946],
    [new Date('2016/09/21 17:24:54'), -3, 2.4342351778966647, 0.3885430874101398],
    [new Date('2016/09/21 17:25:24'), 4, 2.438147241450308, 0.4694476264371935],
    [new Date('2016/09/21 17:28:57'), -1, 2.783881598826976, 5.843397589464814],
    [new Date('2016/09/21 17:29:42'), -5, 3.4484491492554064, 53.1654040342744],
    [new Date('2016/09/21 17:30:04'), -16, 3.807518705333673, 58.756836449170926],
    [new Date('2016/09/21 17:30:23'), -13, 4.11900238327783, 59.01796003152448],
    [new Date('2016/09/21 17:30:43'), -6, 4.4512199862398605, 59.79916853316549],
    [new Date('2016/09/21 17:30:52'), -8, 4.6024441376275025, 60.48966055505682],
    [new Date('2016/09/21 17:31:10'), 4, 4.895572567741806, 58.62568602286072],
    [new Date('2016/09/21 17:31:11'), 4, 4.910972178823211, 55.43859989305592],
    [new Date('2016/09/21 17:31:22'), 7, 5.086663589521018, 57.499007137464325],
    [new Date('2016/09/21 17:31:34'), 0, 5.273641158845821, 56.09327079744082],
    [new Date('2016/09/21 17:31:41'), -3, 5.3789694503693575, 54.168835640675724],
    [new Date('2016/09/21 17:31:54'), 8, 5.570933515159525, 53.15927948035403],
    [new Date('2016/09/21 17:32:11'), -5, 5.677966330899411, 22.665772744916893],
    [new Date('2016/09/21 17:32:48'), -15, 5.717726025514218, 3.868510827386682],
    [new Date('2016/09/21 17:33:03'), -1, 5.845129806514435, 30.57690744005205],
    [new Date('2016/09/21 17:33:14'), 2, 5.982642069704907, 45.00401340779083],
    [new Date('2016/09/21 17:33:27'), 4, 6.164140647415185, 50.26114459669235],
    [new Date('2016/09/21 17:33:48'), 2, 6.442988472474772, 47.80248429592912],
    [new Date('2016/09/21 17:33:50'), 2, 6.462445813083156, 35.023213095091286],
    [new Date('2016/09/21 17:33:56'), 3, 6.549791236265772, 52.4072539095694],
    [new Date('2016/09/21 17:34:18'), 1, 6.804350563006075, 41.65516255750411],
    [new Date('2016/09/21 17:34:19'), 3, 6.818707589251867, 51.68529448485013],
    [new Date('2016/09/21 17:34:38'), 5, 7.043366662533503, 42.566982305994266],
    [new Date('2016/09/21 17:34:47'), 2, 7.143296115259765, 39.97178109050459],
    [new Date('2016/09/21 17:35:03'), 14, 7.316519561077749, 38.97527530904647],
    [new Date('2016/09/21 17:35:15'), 13, 7.467819013351358, 45.38983568208261],
    [new Date('2016/09/21 17:35:22'), 16, 7.543468694729299, 38.90555042294104],
    [new Date('2016/09/21 17:35:41'), 16, 7.744098146685595, 38.01400142329836],
    [new Date('2016/09/21 17:35:50'), 14, 7.808231975620615, 25.653531574007655],
    [new Date('2016/09/21 17:35:56'), 13, 7.85135113792652, 25.871497383543502],
    [new Date('2016/09/21 17:36:12'), 5, 7.904032554028619, 11.853318622972349],
    [new Date('2016/09/21 17:36:34'), -2, 7.906760178989662, 0.44633862998891194],
    [new Date('2016/09/21 17:36:55'), -4, 7.906950221625759, 0.032578737616539004],
    [new Date('2016/09/21 17:37:23'), -6, 7.908249618607146, 0.1670653261783359],
    [new Date('2016/09/21 17:37:36'), -7, 7.908482372351051, 0.06445488292751046],
    [new Date('2016/09/21 17:38:51'), 4, 7.911156509277206, 0.12835857245548515],
    [new Date('2016/09/21 17:39:20'), 8, 7.914897502309761, 0.4643991350756835],
    [new Date('2016/09/21 17:40:26'), 1, 7.915130256053666, 0.012695658758449033],
    [new Date('2016/09/21 17:40:59'), 1, 7.915692409752334, 0.06132585803658155],
    [new Date('2016/09/21 17:45:02'), -3, 8.180182639830981, 3.918373778942923],
    [new Date('2016/09/21 17:45:57'), 23, 8.93063745302231, 49.12067868161421],
    [new Date('2016/09/21 17:46:15'), 20, 9.156873054453492, 45.247120286236395],
    [new Date('2016/09/21 17:46:32'), -3, 9.355976888764642, 42.1631649129497],
    [new Date('2016/09/21 17:46:45'), 0, 9.493746790130878, 38.1516649937265],
    [new Date('2016/09/21 17:47:02'), 13, 9.639610796371366, 30.88884838033878],
    [new Date('2016/09/21 17:47:20'), 6, 9.75968541274481, 24.01492327468859],
    [new Date('2016/09/21 17:47:35'), 10, 9.836639775152822, 18.4690469779227],
    [new Date('2016/09/21 17:47:52'), -2, 9.92303908099817, 18.296323590779423],
    [new Date('2016/09/21 17:48:13'), -4, 9.970223169647204, 8.088700911262938],
    [new Date('2016/09/21 17:48:32'), 2, 9.979144047097785, 1.6902715169521378],
    [new Date('2016/09/21 17:48:49'), -1, 9.983980809531426, 1.024255574182614],
    [new Date('2016/09/21 17:49:02'), -2, 9.991440436907896, 2.065742965791761],
    [new Date('2016/09/21 17:49:58'), 0, 9.997894196411174, 0.4148845394965051],
    [new Date('2016/09/21 17:50:46'), -4, 9.998849148838914, 0.07162143208048274],
    [new Date('2016/09/21 17:51:18'), -3, 10.077747175118262, 8.876027956426645],
    [new Date('2016/09/21 17:51:50'), 9, 10.26559110300971, 21.132441887787962],
    [new Date('2016/09/21 17:52:01'), 1, 10.35944883980442, 30.717077496450926],
    [new Date('2016/09/21 17:52:14'), 8, 10.49084377416723, 36.386289515854926],
    [new Date('2016/09/21 17:52:25'), -1, 10.620092083943653, 42.299446835920634],
    [new Date('2016/09/21 17:52:36'), -1, 10.756615200635178, 44.68029273540786],
    [new Date('2016/09/21 17:52:47'), 17, 10.903648647139287, 48.12003703770833],
    [new Date('2016/09/21 17:52:53'), 15, 10.983923273003418, 48.16477551847845],
    [new Date('2016/09/21 17:53:04'), 14, 11.14270415135816, 51.96465109791542],
    [new Date('2016/09/21 17:53:28'), 16, 11.51966714549492, 56.54444912051394],
    [new Date('2016/09/21 17:53:37'), 25, 11.663942991476464, 57.710338392618254],
    [new Date('2016/09/21 17:53:49'), 24, 11.845063843420492, 54.336255583208604],
    [new Date('2016/09/21 17:53:57'), 20, 11.950153726799224, 47.29044752042902],
    [new Date('2016/09/21 17:54:02'), 12, 12.003556891068923, 38.450278274183916],
    [new Date('2016/09/21 17:54:16'), 20, 12.178343304340823, 44.94507769848823],
    [new Date('2016/09/21 17:54:22'), 17, 12.245036221660706, 40.01575039193079],
    [new Date('2016/09/21 17:54:32'), 19, 12.355951134749308, 39.929368711896714],
    [new Date('2016/09/21 17:54:33'), 19, 12.36734973300591, 41.0349537237643],
    [new Date('2016/09/21 17:54:56'), 20, 12.517562358688787, 23.511541411232905],
    [new Date('2016/09/21 17:55:11'), 25, 12.532705668576074, 3.634394372948878],
    [new Date('2016/09/21 17:59:18'), 22, 12.571153388685602, 0.5603716291267241],
  ];
  return var_array;
}

// npoint = 196


function draw_ele(){
  google.charts.setOnLoadCallback(drawChart_ele);
  function drawChart_ele() {
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dashboard_ele')
    );
    var chart_option = getGraphOptions();
    var control_option = getControlOptions();
    var data = array_ele();
    var chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_ele',
        view: {'columns': [0,1]}
    });
    chart.setOption('vAxis.title', 'Elevation (m)');
    var chart_distance = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_distance',
        view: {'columns': [0,2]}
    });
    chart_distance.setOption('vAxis.title', 'Distance (km)');
    var chart_velocity = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'graph_velocity',
        view: {'columns': [0,3]}
    });
    chart_velocity.setOption('vAxis.title', 'Velocity (km/h)');
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_ele',
        options: control_option,
    });
    dashboard.bind(control, [chart, chart_distance, chart_velocity]);
    dashboard.draw(data);
  }
}

draw_ele();

function writeHTMLGraph(){
  document.getElementById("graph").innerHTML='<h2>Graph</h2><div id="dashboard_ele" style="width: 0px; height: 0px"></div><div id="graph_ele" style="width: 800px; height: 200px"></div><div id="graph_distance" style="width: 800px; height: 200px"></div><div id="graph_velocity" style="width: 800px; height: 200px"></div><div id="control_ele" style="width: 800px; height: 100px"></div>';
}

