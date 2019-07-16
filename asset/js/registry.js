$(document).ready(function () {
  var city = [
    { text: "台北", parentId: 1 },
    { text: "台中", parentId: 2 },
    { text: "台南", parentId: 3 }
  ];
  var unit = [
    { parentId: 1, text: "中正區", value: "1" },
    { parentId: 1, text: "信義區", value: "2" },
    { parentId: 1, text: "南港區", value: "3" },
    { parentId: 2, text: "西屯區", value: "4" },
    { parentId: 2, text: "大里區", value: "5" },
    { parentId: 2, text: "北屯區", value: "6" },
    { parentId: 3, text: "關廟區", value: "7" },
    { parentId: 3, text: "仁德區", value: "8" },
    { parentId: 3, text: "新營區", value: "9" }
  ];
  var intrest = [
    {
      text: "大學", expanded: true, items: [
        { text: "四技" },
        { text: "二專" },
      ]
    },
    {
      text: "高中", items: [
        { text: "一般高中" },
        { text: "高職" },
      ]
    }
  ]
  $("#address-city").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "parentId",
    dataSource: city
  });
  $("#address-unit").kendoDropDownList({
    cascadeFrom: "address-city",
    dataTextField: "text",
    dataValueField: "value",
    dataSource: unit
  });
  $("#cellphone").kendoMaskedTextBox({
    mask: "0000-000000"
  });
  $("#datepicker").kendoDatePicker();
  $("#confirm-button").kendoButton({
    icon: "check"
  });
  $("#cancel-button").kendoButton({
    icon: "close"
  });
  $("#daterangepicker").kendoDateRangePicker({
    labels: false,
    format: "yyyy/MM/dd"
  });
  $("#notification-switch").kendoSwitch();
  $("#intrest").kendoDropDownTree({
    placeholder: "Select ...",
    height: "auto",
    dataSource: intrest
  });

  $("#files").kendoUpload();

  var staticNotification = $("#staticNotification").kendoNotification({
    appendTo: "#appendto"
  }).data("kendoNotification");

  $("#confirm-button").click(function () {
    var d = new Date();
    staticNotification.show("成功", "success");
    var container = $(staticNotification.options.appendTo);
    container.scrollTop(container[0].scrollHeight);
  });

});
