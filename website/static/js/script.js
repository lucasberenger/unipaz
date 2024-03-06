const barsButton = document.querySelector('.fa-solid')
const dropDown = document.querySelector('.nav-dropdown')

if(screen.innerWidth > 952) {
    dropDown.style.display = 'none'
} 

barsButton.addEventListener('click', () => {
    if(dropDown.style.display === 'none') {
        dropDown.style.display = 'block'
        barsButton.classList.remove('barsButton')
        barsButton.classList.add('fa-x')
    } else {
        dropDown.style.display = 'none'
        barsButton.classList.remove('fa-x')
        barsButton.classList.add('barsButton')
    }
})

// scroll window animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// services redirect

const estateButton = document.querySelector('.estate')
const escortButton = document.querySelector('.escort')
const personalButton = document.querySelector('.personal')
const eventButton = document.querySelector('.event')

function redirectAndScroll(button, targetId) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 

        window.location.href = './servicos.html' + targetId;

        setTimeout(() => {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    });
}

redirectAndScroll(estateButton, '#seguranca-patrimonial');
redirectAndScroll(escortButton, '#escort');
redirectAndScroll(personalButton, '#seguranca-pessoal');
redirectAndScroll(eventButton, '#eventos');

// logo animation

// $('.clients-logo').slick({
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

  $('.clients-logo').slick({
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

//  ----------

// chardiv

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      startAngle: 160, endAngle: 380
    })
  );
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  
  var series0 = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "litres",
      categoryField: "country",
      startAngle: 160,
      endAngle: 380,
      radius: am5.percent(70),
      innerRadius: am5.percent(65)
    })
  );
  
  var colorSet = am5.ColorSet.new(root, {
    colors: [series0.get("colors").getIndex(0)],
    passOptions: {
      lightness: -0.05,
      hue: 0
    }
  });
  
  series0.set("colors", colorSet);
  
  series0.ticks.template.set("forceHidden", true);
  series0.labels.template.set("forceHidden", true);
  
  var series1 = chart.series.push(
    am5percent.PieSeries.new(root, {
      startAngle: 160,
      endAngle: 380,
      valueField: "bottles",
      innerRadius: am5.percent(80),
      categoryField: "country"
    })
  );
  
  series1.ticks.template.set("forceHidden", true);
  series1.labels.template.set("forceHidden", true);
  
  var label = chart.seriesContainer.children.push(
    am5.Label.new(root, {
      textAlign: "center",
      centerY: am5.p100,
      centerX: am5.p50,
      text: "[fontSize:18px]total[/]:\n[bold fontSize:30px]1647.9[/]"
    })
  );
  
  var data = [
    {
      country: "Lithuania",
      litres: 501.9,
      bottles: 1500
    },
    {
      country: "Czech Republic",
      litres: 301.9,
      bottles: 990
    },
    {
      country: "Ireland",
      litres: 201.1,
      bottles: 785
    },
    {
      country: "Germany",
      litres: 165.8,
      bottles: 255
    },
    {
      country: "Australia",
      litres: 139.9,
      bottles: 452
    },
    {
      country: "Austria",
      litres: 128.3,
      bottles: 332
    },
    {
      country: "UK",
      litres: 99,
      bottles: 150
    },
    {
      country: "Belgium",
      litres: 60,
      bottles: 178
    },
    {
      country: "The Netherlands",
      litres: 50,
      bottles: 50
    }
  ];
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series0.data.setAll(data);
  series1.data.setAll(data);
  
  });