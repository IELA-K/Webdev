// Define the list of provinces, cities, and barangays
const provinces = {
    "00": [
      { name: "Caloocan", cities: [
        { name: "Sangandaan" },
        { name: "Dagat-Dagatan" },
        { name: "Poblacion" },
        { name: "Kaunlaran Village" },
        { name: "Maypajo" },
        { name: "Marulas" },
        { name: "Grace Park West" },
        { name: "Grace Park East" },
        { name: "University Hills" },
        { name: "Morning Breeze Subdivision" },
        { name: "Balintawak" },
        { name: "Barrio San Jose" },
        { name: "Bagong Barrio West" },
        { name: "Bagong Barrio East" },
        { name: "Libis Baesa" },
        { name: "Libis Reparo" },
        { name: "Santa Quiteria" },
        { name: "Talipapa" },
        { name: "Bagbaguin" },
        { name: "Kaybiga" },
        { name: "Llano" },
        { name: "Deparo" },
        { name: "BF Homes Caloocan" },
        { name: "Deparo 2" },
        { name: "Bagumbong" },
        { name: "Urduja Village" },
        { name: "Congress" },
        { name: "Camarin" },
        { name: "Bagong Silang" },
        { name: "Amparo" },
        { name: "Tala" },
        // Add more barangays here
      ]},
      { name: "Las Piñas", cities: [
        { name: "Almanza Uno" },
        { name: "Almanza Dos" },
        { name: "C.A.A. – B. F. International" },
        { name: "Daniel Fajardo	" },
        { name: "Elias Aldana	" },
        { name: "Ilaya" },
        { name: "Manuyo Uno	" },
        { name: "Manuyo Dos" },
        { name: "Pamplona Uno" },
        { name: "Pamplona Dos" },
        { name: "Pamplona Tres" },
        { name: "Pilar Village	" },
        { name: "Pulang Lupa Uno	" },
        { name: "Pulang Lupa Dos" },
        { name: "Talon Uno" },
        { name: "Talon Dos" },
        { name: "Talon Tres" },
        { name: "Talon Kuatro" },
        { name: "Talon Singko" },
        { name: "Zapote" },
        // Add more barangays here
      ]},
      { name: "Makati", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Malabon", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Mandaluyong", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Manila", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Marikina", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Muntinlupa", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Navotas", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Parañaque", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Pasay", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Pasig", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Pateros", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Quezon City", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "San Juan", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Taguig", cities: [
        { name: "Barangay A" },
        { name: "Barangay B" },
        { name: "Barangay C" },
        // Add more barangays here
      ]},
      { name: "Valenzuela", cities: [
        { name: "Arkong Bato" },
        { name: "Bagbaguin" },
        { name: "Balangkas" },
        { name: "Bignay" },
        { name: "Bisig" },
        { name: "Canumay East" },
        { name: "Canumay West" },
        { name: "Coloong" },
        { name: "Dalandanan" },
        { name: "Gen. T. de Leon" },
        { name: "Isla" },
        { name: "Karuhatan" },
        { name: "Lawang Bato" },
        { name: "Lingunan" },
        { name: "Mabolo" },
        { name: "Malanday" },
        { name: "Malinta" },
        { name: "Mapulang Lupa	" },
        { name: "Marulas" },
        { name: "Maysan" },
        { name: "Palasan" },
        { name: "Parada" },
        { name: "Pariancillo Villa" },
        { name: "Paso de Blas" },
        { name: "Pasolo" },
        { name: "Poblacion" },
        { name: "Polo" },
        { name: "Punturin" },
        { name: "Rincon" },
        { name: "Tagalag" },
        { name: "Ugong" },
        { name: "Veinte Reales" },
        { name: "Wawang Pulo" },
        // Add more barangays here
      ]},
    ],
    "01": [
      { name: "Abra Province", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      { name: "Baguio City", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      { name: "Benguet Province", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      { name: "Ifugao Province", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      { name: "Kalinga Province", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      { name: "Mountain Province", cities: [
        { name: "Barangay X" },
        { name: "Barangay Y" },
        { name: "Barangay Z" },
        // Add more barangays here
      ]},
      // Add more cities and barangays here
    ],
    "02": [
        { name: "COTABATO CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "LAMITAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "MARAWI CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "03": [
        { name: "DAGUPAN CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "LAOAG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "SAN FERNANDO CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "VIGAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "04": [
        { name: "Cauayan City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "Bayombong", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Ilagan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Santiago City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Tuguegarao City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "05": [
        { name: "Angeles City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "Balanga City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Cabanatuan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Gapan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Mabalacat City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Malolos City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Meycauayan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "San Fernando City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "San Jose City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Tarlac City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "06": [
        { name: "Antipolo City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "Bacoor City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Batangas City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Binan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Cabuyao City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Calamba City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Cavite city", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Dasmarinas City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Lipa City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "San Pablo City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Santa Rosa City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Tanauan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Tayabas City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "07": [
        { name: "Calapan City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "El Nido", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Puerto Princesa City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Roxas", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "San Jose", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "08": [
        { name: "Iriga City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "Legazpi City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Ligao City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Masbate City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Naga City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Tabaco City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Sorsogon City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "09": [
        { name: "Bacolod City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "Bago City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Cadiz City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Iloilo City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Kabankalan City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Passi City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Roxas City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "San Carlos City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "Silay City", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "10": [
        { name: "Cebu City", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: " LAPU LAPU CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "MANDAUE CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TAGBILIRAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TALISAY CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "DANAO CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "NAGA CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "11": [
        { name: "BAYBAY CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "BORONGAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "CALBAYOG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "CATBALOGAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "MAASIN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "ORMOC CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TACLOBAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "12": [
        { name: "DAPITAN CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "DIPOLOG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        { name: "ISABELA CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        { name: "PAGADIAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        { name: "ZAMBOANGA CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "13": [
        { name: "CAGAYAN DE ORO", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "ILIGAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "GINGOOG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "MALAYBALAY CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "VALENCIA CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "OZAMIZ CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "EL. SALVADOR CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "14": [
        { name: "DAVAO CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "MATI CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "PANABO CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TAGUM CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "DIGOS CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "SAMAL CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "15": [
        { name: "GENERAL SANTOS CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "KIDAPAWAN CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "KORONADAL CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TACURONG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],
    "16": [
        { name: "BUTUAN CITY", cities: [
          { name: "Barangay X" },
          { name: "Barangay Y" },
          { name: "Barangay Z" },
          // Add more barangays here
        ]},
        { name: "BISIIG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "SURIGAO CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
          { name: "TANDAG CITY", cities: [
            { name: "Barangay X" },
            { name: "Barangay Y" },
            { name: "Barangay Z" },
            // Add more barangays here
          ]},
        // Add more cities and barangays here
      ],

    // Add more provinces, cities, and barangays here
  };

  // Function to populate the city dropdown based on the selected province
  function Cities() {
    const provinceDropdown = document.getElementById("provinceDropdown");
    const selectedProvince = provinceDropdown.value;
    const cityDropdown = document.getElementById("cityDropdown");
    const barangayDropdown = document.getElementById("barangayDropdown");

    // Clear previous options
    cityDropdown.innerHTML = '<option value="">Select City</option>';
    barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

    if (selectedProvince !== "") {
      const selectedCities = provinces[selectedProvince];
      selectedCities.forEach(city => {
        const option = document.createElement("option");
        option.value = city.name;
        option.textContent = city.name;
        cityDropdown.appendChild(option);
      });
    }
  }

  // Function to populate the barangay dropdown based on the selected city
  function Barangays() {
    const provinceDropdown = document.getElementById("provinceDropdown");
    const selectedProvince = provinceDropdown.value;
    const cityDropdown = document.getElementById("cityDropdown");
    const selectedCity = cityDropdown.value;

    if (selectedProvince !== "" && selectedCity !== "") {
      const selectedCities = provinces[selectedProvince];
      const selectedBarangays = selectedCities.find(city => city.name === selectedCity).cities;

      //clear the previous options
      barangayDropdown.innerHTML = '<option value="">Select Barangay</option>';

      selectedBarangays.forEach(barangay => {
        const option = document.createElement("option");
        option.value = barangay.name;
        option.textContent = barangay.name;
        barangayDropdown.appendChild(option);
      });
    }
  }

//Gender options
var Gender = {
    type : {
        "01" : "Female",
        "02" : "Male",
        "03" : "Transgender Female",
        "04" : "Transgender Male",
        "05" : "Prefer not to Answer",
        "06" : "Not Listed",
    }
};

var user_Gender_code ="";
(() => {
    const type_array = Gender.type;

    const id_type_option = document.getElementById("Gender");

    const createGenderDropdown = () => {
        let option =  '';
        option += '<option value="">Select Gender</option>';

        for(let Gender_code in type_array){
            // set selected option user country
            let selected = (Gender_code == user_Gender_code) ? ' selected' : '';
            option += '<option value="'+Gender_code+'"'+selected+'>'+type_array[Gender_code]+'</option>';
        }
        id_type_option.innerHTML = option;
    };
    createGenderDropdown();
})();

//AddressType Options
var AddressType = {
    type : {
        "PR" : "Permanent",
        "TP" : "Temporary"
    }
};

var user_AddressType_code ="";
(() => {
    const type_array = AddressType.type;

    const id_type_option = document.getElementById("AddressType");

    const createAddressTypeDropdown = () => {
        let option =  '';
        option += '<option value="">Select Address Type</option>';

        for(let AddressType_code in type_array){
            // set selected option user country
            let selected = (AddressType_code == user_AddressType_code) ? ' selected' : '';
            option += '<option value="'+AddressType_code+'"'+selected+'>'+type_array[AddressType_code]+'</option>';
        }
        id_type_option.innerHTML = option;
    };
    createAddressTypeDropdown();
})();

//VeteranStatus options
var VeteranStatus = {
    type : {
        "01" : "Select Veteran Status",
        "02" : "I am a veteran",
        "03" : "I am a recently veteran",
        "04" : "I am not a veteran",
        "05" : "I am a special disabled veteran",
        "06" : "I am an other protected veteran",
        "07" : "Prefer not to answer",
    }
};

var user_VeteranStatus_code ="";
(() => {
    const type_array = VeteranStatus.type;

    const id_type_option = document.getElementById("VeteranStatus");

    const createVeteranStatusDropdown = () => {
        let option =  '';
        option += '<option value="">Select Veteran Status</option>';

        for(let VeteranStatus_code in type_array){
            // set selected option user country
            let selected = (VeteranStatus_code == user_VeteranStatus_code) ? ' selected' : '';
            option += '<option value="'+VeteranStatus_code+'"'+selected+'>'+type_array[VeteranStatus_code]+'</option>';
        }
        id_type_option.innerHTML = option;
    };
    createVeteranStatusDropdown();
})();

//Disabilities options
var Disabilities = {
    type : {
        "01" : "I have no disability",
        "02" : "I have two or more impairments and/or disabling medical conditions.",
        "03" : "I have a Specific Learning Difficulty (e.g. Dyslexia/Dyspraxia/AD(H)D)",
        "04" : "I have a social/communication impairment such as Asperger's syndrome/other autistic spectrum disorder",
        "05" : "I have a long standing illness or health condition such as cancer, HIV, diabetes, chronic heart disease, or epilepsy",
        "06" : "I have a physical impairment or mobility issues (e.g. difficulty using arms/using a wheelchair or crutches)",
        "07" : "I am deaf or have a serious hearing impairment",
        "08" : "I am blind or have a serious visual impairment uncorrected by glasses",
        "09" : "I have a disabilty, impairment or medical condition not listed here",
        "10" : "Prefer not to answer",
    }
};

var user_Disabilities_code ="";
(() => {
    const type_array = Disabilities.type;

    const id_type_option = document.getElementById("Disabilities");

    const createDisabilitiesDropdown = () => {
        let option =  '';
        option += '<option value="">Select Disabilties</option>';

        for(let Disabilities_code in type_array){
            // set selected option user country
            let selected = (Disabilities_code == user_Disabilities_code) ? ' selected' : '';
            option += '<option value="'+Disabilities_code+'"'+selected+'>'+type_array[Disabilities_code]+'</option>';
        }
        id_type_option.innerHTML = option;
    };
    createDisabilitiesDropdown();
})();

//Race options
var Race = {
    type : {
        "01" : "American Native or Alaska Native",
        "02" : "Black or African American",
        "03" : "White",
        "04" : "Decline to specify",
        "05" : "Asian",
        "06" : "Native Hawaiian or Other Pacific Islander",
        "07" : "Two or more races",
        "08" : "Other",
        "09" : "Prefer not to answer",
    }
};

var user_Race_code ="";
(() => {
    const type_array = Race.type;

    const id_type_option = document.getElementById("Race");

    const createRaceDropdown = () => {
        let option =  '';
        option += '<option value="">Select your Race</option>';

        for(let Race_code in type_array){
            // set selected option user country
            let selected = (Race_code == user_Race_code) ? ' selected' : '';
            option += '<option value="'+Race_code+'"'+selected+'>'+type_array[Race_code]+'</option>';
        }
        id_type_option.innerHTML = option;
    };
    createRaceDropdown();
})();

//next and back button form
const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));