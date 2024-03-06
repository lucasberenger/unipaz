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

// Define data for each year
var chartData = {
  "1995": [
    { sector: "Agriculture", size: 6.6 },
    { sector: "Mining and Quarrying", size: 0.6 },
    { sector: "Manufacturing", size: 23.2 },
    { sector: "Electricity and Water", size: 2.2 },
    { sector: "Construction", size: 4.5 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
    { sector: "Transport and Communication", size: 9.3 },
    { sector: "Finance, real estate and business services", size: 22.5 } ],
  "1996": [
    { sector: "Agriculture", size: 6.4 },
    { sector: "Mining and Quarrying", size: 0.5 },
    { sector: "Manufacturing", size: 22.4 },
    { sector: "Electricity and Water", size: 2 },
    { sector: "Construction", size: 4.2 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 14.8 },
    { sector: "Transport and Communication", size: 9.7 },
    { sector: "Finance, real estate and business services", size: 22 } ],
  "1997": [
    { sector: "Agriculture", size: 6.1 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 20.9 },
    { sector: "Electricity and Water", size: 1.8 },
    { sector: "Construction", size: 4.2 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 13.7 },
    { sector: "Transport and Communication", size: 9.4 },
    { sector: "Finance, real estate and business services", size: 22.1 } ],
  "1998": [
    { sector: "Agriculture", size: 6.2 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 21.4 },
    { sector: "Electricity and Water", size: 1.9 },
    { sector: "Construction", size: 4.2 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 14.5 },
    { sector: "Transport and Communication", size: 10.6 },
    { sector: "Finance, real estate and business services", size: 23 } ],
  "1999": [
    { sector: "Agriculture", size: 5.7 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 20 },
    { sector: "Electricity and Water", size: 1.8 },
    { sector: "Construction", size: 4.4 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.2 },
    { sector: "Transport and Communication", size: 10.5 },
    { sector: "Finance, real estate and business services", size: 24.7 } ],
  "2000": [
    { sector: "Agriculture", size: 5.1 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 20.4 },
    { sector: "Electricity and Water", size: 1.7 },
    { sector: "Construction", size: 4 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
    { sector: "Transport and Communication", size: 10.7 },
    { sector: "Finance, real estate and business services", size: 24.6 } ],
  "2001": [
    { sector: "Agriculture", size: 5.5 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 20.3 },
    { sector: "Electricity and Water", size: 1.6 },
    { sector: "Construction", size: 3.1 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.3 },
    { sector: "Transport and Communication", size: 10.7 },
    { sector: "Finance, real estate and business services", size: 25.8 } ],
  "2002": [
    { sector: "Agriculture", size: 5.7 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 20.5 },
    { sector: "Electricity and Water", size: 1.6 },
    { sector: "Construction", size: 3.6 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.1 },
    { sector: "Transport and Communication", size: 10.7 },
    { sector: "Finance, real estate and business services", size: 26 } ],
  "2003": [
    { sector: "Agriculture", size: 4.9 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 19.4 },
    { sector: "Electricity and Water", size: 1.5 },
    { sector: "Construction", size: 3.3 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.2 },
    { sector: "Transport and Communication", size: 11 },
    { sector: "Finance, real estate and business services", size: 27.5 } ],
  "2004": [
    { sector: "Agriculture", size: 4.7 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 18.4 },
    { sector: "Electricity and Water", size: 1.4 },
    { sector: "Construction", size: 3.3 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.9 },
    { sector: "Transport and Communication", size: 10.6 },
    { sector: "Finance, real estate and business services", size: 28.1 } ],
  "2005": [
    { sector: "Agriculture", size: 4.3 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 18.1 },
    { sector: "Electricity and Water", size: 1.4 },
    { sector: "Construction", size: 3.9 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
    { sector: "Transport and Communication", size: 10.6 },
    { sector: "Finance, real estate and business services", size: 29.1 } ],
  "2006": [
    { sector: "Agriculture", size: 4 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 16.5 },
    { sector: "Electricity and Water", size: 1.3 },
    { sector: "Construction", size: 3.7 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 14.2 },
    { sector: "Transport and Communication", size: 12.1 },
    { sector: "Finance, real estate and business services", size: 29.1 } ],
  "2007": [
    { sector: "Agriculture", size: 4.7 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 16.2 },
    { sector: "Electricity and Water", size: 1.2 },
    { sector: "Construction", size: 4.1 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.6 },
    { sector: "Transport and Communication", size: 11.2 },
    { sector: "Finance, real estate and business services", size: 30.4 } ],
  "2008": [
    { sector: "Agriculture", size: 4.9 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 17.2 },
    { sector: "Electricity and Water", size: 1.4 },
    { sector: "Construction", size: 5.1 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.4 },
    { sector: "Transport and Communication", size: 11.1 },
    { sector: "Finance, real estate and business services", size: 28.4 } ],
  "2009": [
    { sector: "Agriculture", size: 4.7 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 16.4 },
    { sector: "Electricity and Water", size: 1.9 },
    { sector: "Construction", size: 4.9 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.5 },
    { sector: "Transport and Communication", size: 10.9 },
    { sector: "Finance, real estate and business services", size: 27.9 } ],
  "2010": [
    { sector: "Agriculture", size: 4.2 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 16.2 },
    { sector: "Electricity and Water", size: 2.2 },
    { sector: "Construction", size: 4.3 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.7 },
    { sector: "Transport and Communication", size: 10.2 },
    { sector: "Finance, real estate and business services", size: 28.8 } ],
  "2011": [
    { sector: "Agriculture", size: 4.1 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 14.9 },
    { sector: "Electricity and Water", size: 2.3 },
    { sector: "Construction", size: 5 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 17.3 },
    { sector: "Transport and Communication", size: 10.2 },
    { sector: "Finance, real estate and business services", size: 27.2 } ],
  "2012": [
    { sector: "Agriculture", size: 3.8 },
    { sector: "Mining and Quarrying", size: 0.3 },
    { sector: "Manufacturing", size: 14.9 },
    { sector: "Electricity and Water", size: 2.6 },
    { sector: "Construction", size: 5.1 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 15.8 },
    { sector: "Transport and Communication", size: 10.7 },
    { sector: "Finance, real estate and business services", size: 28 } ],
  "2013": [
    { sector: "Agriculture", size: 3.7 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 14.9 },
    { sector: "Electricity and Water", size: 2.7 },
    { sector: "Construction", size: 5.7 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.5 },
    { sector: "Transport and Communication", size: 10.5 },
    { sector: "Finance, real estate and business services", size: 26.6 } ],
  "2014": [
    { sector: "Agriculture", size: 3.9 },
    { sector: "Mining and Quarrying", size: 0.2 },
    { sector: "Manufacturing", size: 14.5 },
    { sector: "Electricity and Water", size: 2.7 },
    { sector: "Construction", size: 5.6 },
    { sector: "Trade (Wholesale, Retail, Motor)", size: 16.6 },
    { sector: "Transport and Communication", size: 10.5 },
    { sector: "Finance, real estate and business services", size: 26.5 } ]
};

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
var chart = root.container.children.push(am5percent.PieChart.new(root, {
  innerRadius: 100,
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "size",
  categoryField: "sector"
}));


// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([
  { sector: "Agriculture", size: 6.6 },
  { sector: "Mining and Quarrying", size: 0.6 },
  { sector: "Manufacturing", size: 23.2 },
  { sector: "Electricity and Water", size: 2.2 },
  { sector: "Construction", size: 4.5 },
  { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
  { sector: "Transport and Communication", size: 9.3 },
  { sector: "Finance, real estate and business services", size: 22.5 }
]);


// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
series.appear(1000, 100);


// Add label
var label = root.tooltipContainer.children.push(am5.Label.new(root, {
  x: am5.p50,
  y: am5.p50,
  centerX: am5.p50,
  centerY: am5.p50,
  fill: am5.color(0x000000),
  fontSize: 50
}));


// Animate chart data
var currentYear = 1995;
function getCurrentData() {
  var data = chartData[currentYear];
  currentYear++;
  if (currentYear > 2014)
    currentYear = 1995;
  return data;
}

function loop() {
  label.set("text", currentYear);
  var data = getCurrentData();
  for(var i = 0; i < data.length; i++) {
    series.data.setIndex(i, data[i]);
  }
  chart.setTimeout( loop, 4000 );
}

loop();

});