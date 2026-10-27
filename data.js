var APP_DATA = {
  "scenes": [
    {
      "id": "0-suelo",
      "name": "suelo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.046186477039595886,
        "pitch": -0.3884412339995684,
        "fov": 1.6722432885292167
      },
      "linkHotspots": [
        {
          "yaw": -0.31739677847356695,
          "pitch": -0.4682439249593191,
          "rotation": 0,
          "target": "1-panorama-futurista-al-atardecer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.40041685604410837,
          "pitch": -0.4528823543481,
          "title": "Plug in city",
          "text": "Plug-In City es un proyecto utópico de ciudad del futuro diseñado por el arquitecto británico Peter Cook, integrante del grupo Archigram. Propone una megaestructura que funciona como soporte para cápsulas habitacionales y otros módulos intercambiables, como oficinas y comercios."
        }
      ]
    },
    {
      "id": "1-panorama-futurista-al-atardecer",
      "name": "Panorama futurista al atardecer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33380468079084125,
          "pitch": 0.6419721742360913,
          "rotation": 0,
          "target": "0-suelo"
        },
        {
          "yaw": -0.12204104359088497,
          "pitch": -0.2564589604355092,
          "rotation": 0,
          "target": "2-ciudad-futurista-al-atardecer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2573586193466255,
          "pitch": -0.22091625606009657,
          "title": "<br>",
          "text": "La estructura principal contiene las circulaciones y los servicios, mientras que las cápsulas pueden instalarse, retirarse o reemplazarse según las necesidades de los habitantes. La grúa ubicada en la parte superior permite mover y sustituir estos módulos, haciendo posible que la ciudad se transforme continuamente sin reconstruir toda su estructura.&nbsp;"
        }
      ]
    },
    {
      "id": "2-ciudad-futurista-al-atardecer",
      "name": "Ciudad futurista al atardecer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03868836079176852,
          "pitch": 0.16819803309256898,
          "rotation": 0,
          "target": "1-panorama-futurista-al-atardecer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
