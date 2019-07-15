$(document).ready(function() {
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
  $("#address-city").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "parentId",
    dataSource: city
    // change: onChange
  });
  $("#address-unit").kendoDropDownList({
    cascadeFrom: "address-city",
    dataTextField: "text",
    dataValueField: "value",
    dataSource: unit
  });
  $("#cellphone").kendoMaskedTextBox({
    mask: "00-0000-0000"
  });
  $("#datepicker").kendoDatePicker();
  $("#confirm-button").kendoButton({
    icon: "ungroup"
  });
  $("#cancel-button").kendoButton({
    icon: "cancel"
  });
  $("#daterangepicker").kendoDateRangePicker({
    labels: false,
    format: "yyyy/MM/dd"
  });
});
