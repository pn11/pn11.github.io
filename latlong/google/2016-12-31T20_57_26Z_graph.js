function array_ele(){
  var var_array = [
    ['Time', 'Elevation (m)', 'Distance (km)', 'Velocity (km/h)'],
    [new Date('2017/1/1 05:57:26'), 58, 0.0, 0.0],
    [new Date('2017/1/1 05:59:40'), 69, 0.008371588437011449, 0.2249083460689643],
    [new Date('2017/1/1 06:00:14'), 73, 0.010931879619965354, 0.2710896546657076],
    [new Date('2017/1/1 06:02:29'), 66, 0.019432969154403956, 0.22669572091836274],
    [new Date('2017/1/1 06:03:17'), 71, 0.15632548302700197, 10.266938540444851],
    [new Date('2017/1/1 06:04:10'), 86, 0.2765816716417782, 8.168344887041405],
    [new Date('2017/1/1 06:04:42'), 85, 0.27848684314461386, 0.21433179406901195],
    [new Date('2017/1/1 06:05:10'), 86, 0.31303071908207547, 4.441355477673633],
    [new Date('2017/1/1 06:05:47'), 85, 0.33412438160176466, 2.0523563532670543],
    [new Date('2017/1/1 06:06:13'), 81, 0.41867696456883, 11.707280718516744],
    [new Date('2017/1/1 06:06:48'), 95, 0.5324667286955096, 11.704090024458464],
    [new Date('2017/1/1 06:07:13'), 92, 0.610652299391587, 11.258722180235154],
    [new Date('2017/1/1 06:07:44'), 96, 0.6943134841690797, 9.71549242577334],
    [new Date('2017/1/1 06:08:13'), 112, 0.7655119121984226, 8.838425548470157],
    [new Date('2017/1/1 06:08:43'), 119, 0.8396778009871645, 8.899906654649028],
    [new Date('2017/1/1 06:09:17'), 137, 0.9187189185471976, 8.369059506356445],
    [new Date('2017/1/1 06:09:45'), 139, 0.9716589268721478, 6.806572498922182],
    [new Date('2017/1/1 06:10:17'), 149, 1.0296519872109586, 6.5242192881162175],
    [new Date('2017/1/1 06:10:57'), 160, 1.1073286455650402, 6.990899251867342],
    [new Date('2017/1/1 06:11:19'), 159, 1.1565369376633936, 8.05226597973055],
    [new Date('2017/1/1 06:11:50'), 165, 1.2299499922837984, 8.52538698817605],
    [new Date('2017/1/1 06:12:15'), 172, 1.286598479384282, 8.157382142469613],
    [new Date('2017/1/1 06:12:53'), 180, 1.4018219267652519, 10.915905541355038],
    [new Date('2017/1/1 06:13:18'), 176, 1.4761637664861105, 10.70522491980364],
    [new Date('2017/1/1 06:13:47'), 194, 1.5425838717102245, 8.245254441614149],
    [new Date('2017/1/1 06:14:18'), 193, 1.6228235658586152, 9.318158030135695],
    [new Date('2017/1/1 06:14:48'), 191, 1.70105243043707, 9.38746374941457],
    [new Date('2017/1/1 06:15:21'), 200, 1.7760735513155494, 8.184122277652314],
    [new Date('2017/1/1 06:15:43'), 196, 1.829503337999055, 8.74305600275548],
    [new Date('2017/1/1 06:16:20'), 219, 1.9007854149961247, 6.935553437552717],
    [new Date('2017/1/1 06:16:43'), 222, 1.948165620695921, 7.416032196489864],
    [new Date('2017/1/1 06:17:17'), 227, 2.014613587473278, 7.0356670705436715],
    [new Date('2017/1/1 06:17:43'), 233, 2.0567345131805213, 5.83212817484912],
    [new Date('2017/1/1 06:18:18'), 235, 2.116455543862938, 6.142734584477128],
    [new Date('2017/1/1 06:18:46'), 240, 2.1640665344817087, 6.1214130795562145],
    [new Date('2017/1/1 06:24:54'), 256, 2.2140406116344753, 0.4888768417118482],
    [new Date('2017/1/1 06:25:43'), 260, 2.3042568354950017, 6.628130732610095],
    [new Date('2017/1/1 06:26:22'), 270, 2.3718531338279103, 6.239658307653107],
    [new Date('2017/1/1 06:26:48'), 277, 2.4151186261884536, 5.99060663453675],
    [new Date('2017/1/1 06:27:18'), 281, 2.4694753051991643, 6.522801481285264],
    [new Date('2017/1/1 06:27:50'), 290, 2.5227269338403118, 5.990808222129086],
    [new Date('2017/1/1 06:28:16'), 299, 2.5678907572306087, 6.253452469425702],
    [new Date('2017/1/1 06:28:53'), 305, 2.631739143850715, 6.212275454929239],
    [new Date('2017/1/1 06:29:25'), 312, 2.6936864846514545, 6.969075840083209],
    [new Date('2017/1/1 06:29:55'), 317, 2.7494610035562084, 6.692942268570483],
    [new Date('2017/1/1 06:32:08'), 319, 2.772408602681941, 0.6211380214483985],
    [new Date('2017/1/1 06:32:38'), 323, 2.800103527190129, 3.3233909409825486],
    [new Date('2017/1/1 06:33:36'), 321, 2.857152889497124, 3.5409949018134816],
    [new Date('2017/1/1 06:34:16'), 328, 2.8798969520899234, 2.046965633351924],
    [new Date('2017/1/1 06:37:46'), 343, 2.893280461025528, 0.2294315817532225],
    [new Date('2017/1/1 06:38:29'), 347, 2.9555599584128847, 5.214097455685696],
    [new Date('2017/1/1 06:40:26'), 371, 3.0280718711695247, 2.231135777127385],
    [new Date('2017/1/1 06:40:54'), 366, 3.085313205302145, 7.359600102765465],
    [new Date('2017/1/1 06:42:02'), 384, 3.205369848645639, 6.355939941714376],
    [new Date('2017/1/1 06:42:26'), 396, 3.2513872514607414, 6.902610422265404],
    [new Date('2017/1/1 06:43:05'), 400, 3.309927247340903, 5.403691927399538],
    [new Date('2017/1/1 06:43:57'), 421, 3.3865897259528963, 5.30740236544571],
    [new Date('2017/1/1 06:44:27'), 425, 3.443693031919692, 6.852396716015491],
    [new Date('2017/1/1 06:45:29'), 422, 3.482841353684376, 2.273128360530048],
    [new Date('2017/1/1 06:45:57'), 424, 3.530020562453121, 6.065898270267194],
    [new Date('2017/1/1 06:46:23'), 433, 3.5777693184236847, 6.611366211308836],
    [new Date('2017/1/1 06:46:56'), 430, 3.638779442631504, 6.655649913580248],
    [new Date('2017/1/1 06:48:28'), 454, 3.7663032201694477, 4.990060860180409],
    [new Date('2017/1/1 06:49:24'), 458, 3.8290567259266792, 4.034153941536297],
    [new Date('2017/1/1 06:49:53'), 458, 3.8847568090621163, 6.914493078881849],
    [new Date('2017/1/1 06:50:23'), 466, 3.945251144447087, 7.259320246196476],
    [new Date('2017/1/1 06:51:06'), 484, 4.018204871396556, 6.10775388414155],
    [new Date('2017/1/1 06:51:36'), 494, 4.058138590707685, 4.792046317335567],
    [new Date('2017/1/1 06:51:58'), 494, 4.097839766441631, 6.496556029191161],
    [new Date('2017/1/1 06:53:20'), 494, 4.18385815246711, 3.7764169474600675],
    [new Date('2017/1/1 06:54:53'), 507, 4.329224744998323, 5.627093904434071],
    [new Date('2017/1/1 06:55:19'), 519, 4.360777832402503, 4.36888902519405],
    [new Date('2017/1/1 06:55:49'), 523, 4.382171349862037, 2.567222095144],
    [new Date('2017/1/1 06:56:22'), 511, 4.46894730225752, 9.466467534052713],
    [new Date('2017/1/1 06:56:54'), 520, 4.526624616139464, 6.488697811718602],
    [new Date('2017/1/1 06:57:23'), 529, 4.585309954484463, 7.285076484206745],
    [new Date('2017/1/1 06:58:26'), 551, 4.6228673032360375, 2.146134214375719],
    [new Date('2017/1/1 06:58:56'), 560, 4.691878755595661, 8.28137428315481],
    [new Date('2017/1/1 06:59:28'), 553, 4.74542577658397, 6.024039861184785],
    [new Date('2017/1/1 06:59:59'), 551, 4.775600693440689, 3.504183893038389],
    [new Date('2017/1/1 07:00:23'), 550, 4.7951633190748595, 2.9343938451256575],
    [new Date('2017/1/1 07:00:53'), 559, 4.825899153793534, 3.688300166240981],
    [new Date('2017/1/1 07:01:28'), 542, 4.847516869113037, 2.2235364328631944],
    [new Date('2017/1/1 07:01:55'), 543, 4.865676136619519, 2.4212356675308797],
    [new Date('2017/1/1 07:02:57'), 557, 4.88962018899079, 1.3902998151060733],
    [new Date('2017/1/1 07:04:02'), 577, 4.930714684499014, 2.276002828147793],
    [new Date('2017/1/1 07:04:39'), 561, 5.006751275186189, 7.398154769562931],
    [new Date('2017/1/1 07:05:00'), 569, 5.04929281910646, 7.292836100618027],
    [new Date('2017/1/1 07:05:29'), 582, 5.088026450255377, 4.808312832279295],
    [new Date('2017/1/1 07:06:03'), 589, 5.158309923784567, 7.4417795501495245],
    [new Date('2017/1/1 07:07:02'), 589, 5.25461650240003, 5.876333610435031],
    [new Date('2017/1/1 07:07:33'), 593, 5.306347211046895, 6.007437133184344],
    [new Date('2017/1/1 07:08:36'), 601, 5.378538027608134, 4.12518951778508],
    [new Date('2017/1/1 07:09:06'), 609, 5.417407205966569, 4.66430140301216],
    [new Date('2017/1/1 07:09:37'), 623, 5.457847680575015, 4.696313180335705],
    [new Date('2017/1/1 07:10:03'), 623, 5.474496218169221, 2.3051821284284117],
    [new Date('2017/1/1 07:10:35'), 634, 5.503725430486897, 3.2882863857386178],
    [new Date('2017/1/1 07:11:09'), 627, 5.526176818499237, 2.3772057895418444],
    [new Date('2017/1/1 07:12:16'), 620, 5.531768562700289, 0.30045192722068104],
    [new Date('2017/1/1 07:12:42'), 626, 5.549177961887558, 2.4105321951603806],
    [new Date('2017/1/1 07:13:19'), 633, 5.578630278884581, 2.8656308429535713],
    [new Date('2017/1/1 07:13:54'), 648, 5.609470223144925, 3.172108552492478],
    [new Date('2017/1/1 07:16:45'), 653, 5.630880194075785, 0.4507362301233739],
    [new Date('2017/1/1 07:17:22'), 626, 5.680155688041189, 4.794372385823151],
    [new Date('2017/1/1 07:18:07'), 634, 5.716583198142298, 2.9142008080886925],
    [new Date('2017/1/1 07:18:39'), 641, 5.744625919403998, 3.154806141941309],
    [new Date('2017/1/1 07:19:14'), 463, 5.7782602447772495, 3.459530609820092],
    [new Date('2017/1/1 07:19:41'), 600, 5.8003117427850714, 2.940199734376238],
    [new Date('2017/1/1 07:20:17'), 610, 5.844316873326496, 4.4005130541423885],
    [new Date('2017/1/1 07:20:37'), 657, 5.869983888514742, 4.6200627338843505],
    [new Date('2017/1/1 07:21:11'), 677, 5.915394237402031, 4.80815458806589],
    [new Date('2017/1/1 07:21:40'), 678, 5.9403799660525305, 3.101676660061946],
    [new Date('2017/1/1 07:22:18'), 455, 5.986492334373337, 4.368540156707995],
    [new Date('2017/1/1 07:22:50'), 668, 6.004446586645359, 2.019853380602379],
    [new Date('2017/1/1 07:23:50'), 677, 6.036677307880166, 1.9338432740884457],
    [new Date('2017/1/1 07:26:29'), 676, 6.044103574963781, 0.16814189623279446],
    [new Date('2017/1/1 07:29:52'), 672, 6.046105798375973, 0.035507410265471925],
    [new Date('2017/1/1 07:39:44'), 678, 6.099142336687755, 0.3225194897338067],
    [new Date('2017/1/1 07:40:41'), 512, 6.179884964935186, 5.099534415627245],
    [new Date('2017/1/1 07:42:43'), 588, 6.482005451161363, 8.915030741100294],
    [new Date('2017/1/1 07:43:13'), 581, 6.589697265755896, 12.923017751343862],
    [new Date('2017/1/1 07:43:43'), 562, 6.624320900961816, 4.154836224710464],
    [new Date('2017/1/1 07:44:14'), 546, 6.719279579315754, 11.027459421747578],
    [new Date('2017/1/1 07:45:17'), 494, 6.931265985350673, 12.113508916281084],
    [new Date('2017/1/1 07:45:53'), 491, 7.084192693577978, 15.292670822730475],
    [new Date('2017/1/1 07:46:13'), 470, 7.143077550806836, 10.599274301194415],
    [new Date('2017/1/1 07:47:41'), 443, 7.295086269059006, 6.218538473952399],
    [new Date('2017/1/1 07:48:39'), 411, 7.409020593735676, 7.0717856695864],
    [new Date('2017/1/1 07:50:32'), 349, 7.713720937047987, 9.707267574551501],
    [new Date('2017/1/1 07:50:56'), 315, 7.923682360171918, 31.494213468589688],
    [new Date('2017/1/1 07:51:21'), 303, 8.130281651073933, 29.750297889889982],
    [new Date('2017/1/1 07:51:50'), 280, 8.306328126826285, 21.854045265809347],
    [new Date('2017/1/1 07:52:56'), 234, 8.430352934539513, 6.764989511630644],
    [new Date('2017/1/1 07:53:30'), 219, 8.749960411364368, 33.840791663808126],
    [new Date('2017/1/1 07:53:55'), 212, 8.977759311939288, 32.803041682788404],
    [new Date('2017/1/1 07:54:20'), 195, 9.222141192575268, 35.19099081158133],
    [new Date('2017/1/1 07:55:03'), 144, 9.658941903068815, 36.56936180876199],
    [new Date('2017/1/1 07:55:21'), 128, 9.841771808512066, 36.56598108865019],
    [new Date('2017/1/1 07:56:54'), 95, 10.076812796205305, 9.098360813931807],
    [new Date('2017/1/1 07:57:27'), 87, 10.120193748449111, 4.732467517506081],
    [new Date('2017/1/1 07:58:02'), 99, 10.315091806896518, 20.046657440304745],
    [new Date('2017/1/1 08:01:46'), 77, 10.398620247749328, 1.3424213708487136],
  ];
  return var_array;
}

// npoint = 142


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

