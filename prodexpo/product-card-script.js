const productsArray = [
    {
        "name": "ООО 'Молпродукт'",
        "eventId": 51,
        "products": [
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Беларусь",
                "city": "Санкт-Петербург",
                "brand": "Эко-продукт",
                "category": "food",
                "productName": "Молоко пастеризованное 3,2%",
                "description": "Произведено из отборного сырья с соблюдением всех стандартов качества. Идеально подходит для здорового питания и диетического рациона.",
                "price": 65.50,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "1 л",
                "composition": "Молоко цельное отборное высшего сорта, сливки пастеризованные, закваска на основе чистых культур. Обогащено витаминами A, D и кальцием. Идеально подходит для детского питания и диетического рациона. Произведено из экологически чистого сырья.",
                "website": "morskoy.com",
                "photo": {
                    "fileName": "product_2.jpeg",
                    "fileSize": 7543,
                    "fileType": "image/jpeg",
                    "lastModified": "22.11.2025, 14:45:12",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "1Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "2Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "3Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Молпродукт'",
                "country": "Армения",
                "city": "Нижний Новгород",
                "brand": "Речной",
                "category": "drinks",
                "productName": "Вода минеральная газированная",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 40.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "2 л",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "rechnoy.su",
                "photo": {
                    "fileName": "product_11.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "21.05.2025, 19:40:33",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:30:00.000Z",
        "editedAt": "2026-01-20T10:30:00.000Z"
    },
    {
        "name": "ЗАО 'Пищевик'",
        "eventId": 52,
        "products": [
            {
                "manufacturer": "ЗАО 'Пищевик'",
                "country": "Армения",
                "city": "Екатеринбург",
                "brand": "Урожай",
                "category": "food",
                "productName": "Йогурт натуральный питьевой 2,5%",
                "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
                "price": 89.99,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "450 мл",
                "composition": "Молоко нормализованное, закваска молочнокислых культур (Streptococcus thermophilus, Lactobacillus bulgaricus). Продукт содержит живые молочнокислые микроорганизмы. Без добавления консервантов, красителей и искусственных ароматизаторов. Хранить при температуре от +2°C до +6°C. Срок годности: 14 суток.",
                "website": "classic-food.com",
                "photo": {
                    "fileName": "product_1.jpeg",
                    "fileSize": 9876,
                    "fileType": "image/jpeg",
                    "lastModified": "15.06.2025, 10:30:25",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ЗАО 'Пищевик'",
                "country": "Беларусь",
                "city": "Москва",
                "brand": "Солнечный",
                "category": "drinks",
                "productName": "Сок апельсиновый прямого отжима",
                "description": "Произведено из отборного сырья с соблюдением всех стандартов качества. Идеально подходит для здорового питания и диетического рациона.",
                "price": 120.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "1 л",
                "composition": "Сок апельсиновый прямого отжима концентрированный, вода питьевая подготовленная, сахар белый кристаллический, регулятор кислотности (лимонная кислота). Без добавления консервантов. Витаминизированный продукт.",
                "website": "moloko.ru",
                "photo": {
                    "fileName": "product_12.jpeg",
                    "fileSize": 8765,
                    "fileType": "image/jpeg",
                    "lastModified": "03.12.2025, 10:20:44",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:35:00.000Z",
        "editedAt": "2026-01-20T10:35:00.000Z"
    },
    {
        "name": "АО 'Агрокомбинат'",
        "eventId": 53,
        "products": [
            {
                "manufacturer": "АО 'Агрокомбинат'",
                "country": "Казахстан",
                "city": "Новосибирск",
                "brand": "Фермерское",
                "category": "food",
                "productName": "Кефир обезжиренный 1%",
                "description": "Идеально подходит для здорового питания и диетического рациона. Содержит полезные витамины и минералы для поддержания здоровья.",
                "price": 55.30,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "450 мл",
                "composition": "Молоко обезжиренное, закваска специального приготовления, витаминный комплекс (B1, B2, B6, B12, C, E). Продукт с пониженной жирностью, содержит пробиотические культуры для улучшения пищеварения. Без ГМО, без консервантов.",
                "website": "naturalchoice.ru",
                "photo": {
                    "fileName": "product_3.jpeg",
                    "fileSize": 11234,
                    "fileType": "image/jpeg",
                    "lastModified": "07.03.2025, 09:15:38",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "АО 'Агрокомбинат'",
                "country": "Казахстан",
                "city": "Санкт-Петербург",
                "brand": "Урожай",
                "category": "drinks",
                "productName": "Чай черный байховый",
                "description": "Идеально подходит для здорового питания и диетического рациона. Содержит полезные витамины и минералы для поддержания здоровья.",
                "price": 250.00,
                "packaging": "Картонная упаковка",
                "weight": "200 г",
                "composition": "Молоко нормализованное, закваска молочнокислых культур (Streptococcus thermophilus, Lactobacillus bulgaricus). Продукт содержит живые молочнокислые микроорганизмы. Без добавления консервантов, красителей и искусственных ароматизаторов. Хранить при температуре от +2°C до +6°C. Срок годности: 14 суток.",
                "website": "vkusnoe.ru",
                "photo": {
                    "fileName": "product_13.jpeg",
                    "fileSize": 9432,
                    "fileType": "image/jpeg",
                    "lastModified": "18.07.2025, 14:15:19",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "АО 'Агрокомбинат'",
                "country": "Казахстан",
                "city": "Москва",
                "brand": "Солнечный",
                "category": "fish",
                "productName": "Икра красная лососевая",
                "description": "Идеально подходит для здорового питания и диетического рациона. Содержит полезные витамины и минералы для поддержания здоровья.",
                "price": 1200.00,
                "packaging": "Стеклянная банка с крышкой",
                "weight": "200 г",
                "composition": "Вода минеральная природная лечебно-столовая, добываемая из скважины глубиной 250 метров, диоксид углерода пищевой. Сохраняет все природные микроэлементы: магний, кальций, натрий, калий. Качественная вода.",
                "website": "vkusnoe.ru",
                "photo": {
                    "fileName": "product_23.jpeg",
                    "fileSize": 13456,
                    "fileType": "image/jpeg",
                    "lastModified": "16.07.2025, 10:40:29",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:40:00.000Z",
        "editedAt": "2026-01-20T10:40:00.000Z"
    },
    {
        "name": "ИП Иванов",
        "eventId": 54,
        "products": [
            {
                "manufacturer": "ИП Иванов",
                "country": "Грузия",
                "city": "Казань",
                "brand": "Молочная долина",
                "category": "food",
                "productName": "Сметана 15%",
                "description": "Содержит полезные витамины и минералы для поддержания здоровья. Традиционный рецепт с современными технологиями производства.",
                "price": 78.90,
                "packaging": "Пластиковый контейнер с крышкой",
                "weight": "350 г",
                "composition": "Сливки нормализованные высшего сорта, закваска молочнокислых бактерий. Технология производства позволяет сохранить все полезные свойства продукта. Без стабилизаторов и загустителей. Натуральный продукт.",
                "website": "fermerskoe.com",
                "photo": {
                    "fileName": "product_4.jpeg",
                    "fileSize": 8654,
                    "fileType": "image/jpeg",
                    "lastModified": "19.08.2025, 16:20:47",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ИП Иванов",
                "country": "Грузия",
                "city": "Екатеринбург",
                "brand": "Эко-продукт",
                "category": "drinks",
                "productName": "Кофе молотый арабика",
                "description": "Содержит полезные витамины и минералы для поддержания здоровья. Традиционный рецепт с современными технологиями производства.",
                "price": 450.00,
                "packaging": "Картонная упаковка",
                "weight": "250 г",
                "composition": "Молоко цельное отборное высшего сорта, сливки пастеризованные, закваска на основе чистых культур. Обогащено витаминами A, D и кальцием. Идеально подходит для детского питания и диетического рациона. Произведено из экологически чистого сырья.",
                "website": "fermerskoe.com",
                "photo": {
                    "fileName": "product_14.jpeg",
                    "fileSize": 10567,
                    "fileType": "image/jpeg",
                    "lastModified": "26.02.2025, 16:50:22",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ИП Иванов",
                "country": "Грузия",
                "city": "Санкт-Петербург",
                "brand": "Урожай",
                "category": "fish",
                "productName": "Креветки королевские",
                "description": "Содержит полезные витамины и минералы для поддержания здоровья. Традиционный рецепт с современными технологиями производства.",
                "price": 850.00,
                "packaging": "Заводская упаковка",
                "weight": "500 г",
                "composition": "Сок апельсиновый прямого отжима концентрированный, вода питьевая подготовленная, сахар белый кристаллический, регулятор кислотности (лимонная кислота). Без добавления консервантов. Витаминизированный продукт.",
                "website": "fermerskoe.com",
                "photo": {
                    "fileName": "product_24.jpeg",
                    "fileSize": 11543,
                    "fileType": "image/jpeg",
                    "lastModified": "02.12.2025, 16:15:22",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:45:00.000Z",
        "editedAt": "2026-01-20T10:45:00.000Z"
    },
    {
        "name": "ООО 'Фермерские продукты'",
        "eventId": 55,
        "products": [
            {
                "manufacturer": "ООО 'Фермерские продукты'",
                "country": "Россия",
                "city": "Нижний Новгород",
                "brand": "Домашний",
                "category": "food",
                "productName": "Творог мягкий 5%",
                "description": "Традиционный рецепт с современными технологиями производства. Экологически чистый продукт от проверенных поставщиков.",
                "price": 120.00,
                "packaging": "Пластиковый контейнер с крышкой",
                "weight": "350 г",
                "composition": "Творог зерненый, сливки пастеризованные, кальций карбонат, витамин D3 (холекальциферол). Высокое содержание белка при минимальном количестве жира. Подходит для спортивного питания. Произведено по ГОСТ.",
                "website": "vkusnoe.ru",
                "photo": {
                    "fileName": "product_5.jpeg",
                    "fileSize": 9567,
                    "fileType": "image/jpeg",
                    "lastModified": "28.02.2025, 11:10:55",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Фермерские продукты'",
                "country": "Россия",
                "city": "Новосибирск",
                "brand": "Молочная долина",
                "category": "drinks",
                "productName": "Лимонад классический",
                "description": "Традиционный рецепт с современными технологиями производства. Экологически чистый продукт от проверенных поставщиков.",
                "price": 75.00,
                "packaging": "Пластиковая бутылка с крышкой",
                "weight": "1 л",
                "composition": "Молоко обезжиренное, закваска специального приготовления, витаминный комплекс (B1, B2, B6, B12, C, E). Продукт с пониженной жирностью, содержит пробиотические культуры для улучшения пищеварения. Без ГМО, без консервантов.",
                "website": "naturalchoice.ru",
                "photo": {
                    "fileName": "product_15.jpeg",
                    "fileSize": 8123,
                    "fileType": "image/jpeg",
                    "lastModified": "09.08.2025, 11:35:48",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Фермерские продукты'",
                "country": "Россия",
                "city": "Нижний Новгород",
                "brand": "Эко-продукт",
                "category": "hygiene",
                "productName": "Мыло туалетное",
                "description": "Традиционный рецепт с современными технологиями производства. Экологически чистый продукт от проверенных поставщиков.",
                "price": 45.00,
                "packaging": "Бумажная обертка",
                "weight": "100 г",
                "composition": "Молоко нормализованное, закваска молочнокислых культур (Streptococcus thermophilus, Lactobacillus bulgaricus). Продукт содержит живые молочнокислые микроорганизмы. Без добавления консервантов, красителей и искусственных ароматизаторов. Хранить при температуре от +2°C до +6°C. Срок годности: 14 суток.",
                "website": "naturalchoice.ru",
                "photo": {
                    "fileName": "product_25.jpeg",
                    "fileSize": 6543,
                    "fileType": "image/jpeg",
                    "lastModified": "20.05.2025, 13:30:18",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:50:00.000Z",
        "editedAt": "2026-01-20T10:50:00.000Z"
    },
    {
        "name": "АО 'Кондитерская фабрика'",
        "eventId": 56,
        "products": [
            {
                "manufacturer": "АО 'Кондитерская фабрика'",
                "country": "Армения",
                "city": "Москва",
                "brand": "Премиум",
                "category": "food",
                "productName": "Сыр Российский 45%",
                "description": "Экологически чистый продукт от проверенных поставщиков. Сохраняет все полезные свойства благодаря щадящей обработке.",
                "price": 350.00,
                "packaging": "Фольгированная упаковка",
                "weight": "200 г",
                "composition": "Молоко пастеризованное высшего сорта, закваска мезофильных культур, ферментный препарат микробного происхождения, соль пищевая. Выдержка не менее 30 суток. Традиционный рецепт. Качественный продукт.",
                "website": "eko-product.org",
                "photo": {
                    "fileName": "product_6.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "12.09.2025, 13:25:18",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "АО 'Кондитерская фабрика'",
                "country": "Армения",
                "city": "Казань",
                "brand": "Домашний",
                "category": "meat",
                "productName": "Колбаса докторская",
                "description": "Экологически чистый продукт от проверенных поставщиков. Сохраняет все полезные свойства благодаря щадящей обработке.",
                "price": 320.00,
                "packaging": "Вакуумная упаковка",
                "weight": "500 г",
                "composition": "Сливки нормализованные высшего сорта, закваска молочнокислых бактерий. Технология производства позволяет сохранить все полезные свойства продукта. Без стабилизаторов и загустителей. Натуральный продукт.",
                "website": "eko-product.org",
                "photo": {
                    "fileName": "product_16.jpeg",
                    "fileSize": 12345,
                    "fileType": "image/jpeg",
                    "lastModified": "17.11.2025, 13:40:55",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "АО 'Кондитерская фабрика'",
                "country": "Армения",
                "city": "Екатеринбург",
                "brand": "Молочная долина",
                "category": "hygiene",
                "productName": "Шампунь для волос",
                "description": "Экологически чистый продукт от проверенных поставщиков. Сохраняет все полезные свойства благодаря щадящей обработке.",
                "price": 180.00,
                "packaging": "Пластиковая бутылка",
                "weight": "250 мл",
                "composition": "Молоко цельное отборное высшего сорта, сливки пастеризованные, закваска на основе чистых культур. Обогащено витаминами A, D и кальцием. Идеально подходит для детского питания и диетического рациона. Произведено из экологически чистого сырья.",
                "website": "eko-product.org",
                "photo": {
                    "fileName": "product_26.jpeg",
                    "fileSize": 9876,
                    "fileType": "image/jpeg",
                    "lastModified": "11.08.2025, 09:45:31",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "АО 'Кондитерская фабрика'",
                "country": "Армения",
                "city": "Москва",
                "brand": "Премиум",
                "category": "food",
                "productName": "Сыр Российский 45%",
                "description": "Экологически чистый продукт от проверенных поставщиков. Сохраняет все полезные свойства благодаря щадящей обработке.",
                "price": 350.00,
                "packaging": "Фольгированная упаковка",
                "weight": "200 г",
                "composition": "Молоко пастеризованное высшего сорта, закваска мезофильных культур, ферментный препарат микробного происхождения, соль пищевая. Выдержка не менее 30 суток. Традиционный рецепт. Качественный продукт.",
                "website": "eko-product.org",
                "photo": {
                    "fileName": "product_6.jpeg",
                    "fileSize": 10234,
                    "fileType": "image/jpeg",
                    "lastModified": "12.09.2025, 13:25:18",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T10:55:00.000Z",
        "editedAt": "2026-01-20T10:55:00.000Z"
    },
    {
        "name": "ООО 'Напитки и воды'",
        "eventId": 57,
        "products": [
            {
                "manufacturer": "ООО 'Напитки и воды'",
                "country": "Беларусь",
                "city": "Екатеринбург",
                "brand": "Классика",
                "category": "food",
                "productName": "Масло сливочное 82,5%",
                "description": "Сохраняет все полезные свойства благодаря щадящей обработке. Отличный выбор для всей семьи, подходит для детей и взрослых.",
                "price": 280.50,
                "packaging": "Фольгированная упаковка",
                "weight": "200 г",
                "composition": "Сливки свежие, пахта, соль пищевая йодированная. Произведено методом сбивания. Содержание молочного жира не менее 82,5%. Без растительных жиров и эмульгаторов. Натуральный состав.",
                "website": "domashnee.su",
                "photo": {
                    "fileName": "product_7.jpeg",
                    "fileSize": 7432,
                    "fileType": "image/jpeg",
                    "lastModified": "05.07.2025, 15:40:29",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Напитки и воды'",
                "country": "Беларусь",
                "city": "Москва",
                "brand": "Премиум",
                "category": "meat",
                "productName": "Сосиски молочные",
                "description": "Сохраняет все полезные свойства благодаря щадящей обработке. Отличный выбор для всей семьи, подходит для детей и взрослых.",
                "price": 280.00,
                "packaging": "Вакуумная упаковка",
                "weight": "450 г",
                "composition": "Творог зерненый, сливки пастеризованные, кальций карбонат, витамин D3 (холекальциферол). Высокое содержание белка при минимальном количестве жира. Подходит для спортивного питания. Произведено по ГОСТ.",
                "website": "domashnee.su",
                "photo": {
                    "fileName": "product_17.jpeg",
                    "fileSize": 9876,
                    "fileType": "image/jpeg",
                    "lastModified": "05.04.2025, 09:25:11",
                    "dataUrl": ""
                }
            },
            {
                "manufacturer": "ООО 'Напитки и воды'",
                "country": "Беларусь",
                "city": "Новосибирск",
                "brand": "Домашний",
                "category": "hygiene",
                "productName": "Гель для душа",
                "description": "Сохраняет все полезные свойства благодаря щадящей обработке. Отличный выбор для всей семьи, подходит для детей и взрослых.",
                "price": 120.00,
                "packaging": "Пластиковая бутылка",
                "weight": "250 мл",
                "composition": "Молоко обезжиренное, закваска специального приготовления, витаминный комплекс (B1, B2, B6, B12, C, E). Продукт с пониженной жирностью, содержит пробиотические культуры для улучшения пищеварения. Без ГМО, без консервантов.",
                "website": "domashnee.su",
                "photo": {
                    "fileName": "product_27.jpeg",
                    "fileSize": 8567,
                    "fileType": "image/jpeg",
                    "lastModified": "27.01.2025, 15:20:44",
                    "dataUrl": ""
                }
            }
        ],
        "createdAt": "2026-01-20T11:00:00.000Z",
        "editedAt": "2026-01-20T11:00:00.000Z"
    }
];
class ProductCatalog {
    constructor(config = {}) {
        // Конфигурация
        this.config = {
            maxWords: 3,
            cardsPerPage: {
                mobile: 1,
                tablet: 2,
                desktop: 3,
                large: 5
            },
            visiblePaginationButtons: 3,
            ...config
        };

        // Состояние приложения
        this.state = {
            currentCompanyIndex: 0,
            companiesArray: [],
            visibleCards: 3,
            isDragging: false,
            startX: 0,
            scrollLeftStart: 0
        };

        // Ссылки на DOM элементы
        this.elements = {
            topPagination: document.getElementById('topPagination'),
            bottomPagination: document.getElementById('bottomPagination'),
            productsContainer: document.getElementById('productsContainer'),
            totalProductsCount: document.getElementById('totalProductsCount'),
            scrollLineContainer: document.getElementById('scrollLineContainer'),
            scrollLineThumb: document.getElementById('scrollLineThumb')
        };

        // Данные для перетаскивания ползунка
        this.thumbDragData = {
            isDragging: false,
            startX: 0,
            startLeft: 0
        };

        // Модальное окно
        this.modal = {
            overlay: null,
            image: null
        };

        this.init();
    }

    init() {
        this.initProductsData();
        this.updateVisibleCardsCount();
        this.createImageModal();
        this.displayProducts();
        this.bindEvents();

        console.log('ProductCatalog инициализирован');
    }

    // ====================== ИНИЦИАЛИЗАЦИЯ ДАННЫХ ======================
    initProductsData() {
        this.state.companiesArray = productsArray || [];

        let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

        this.state.companiesArray.forEach(company => {
            if (company.products && Array.isArray(company.products)) {
                company.products.forEach((product, productIndex) => {
                    const productId = `company_${company.eventId}_product_${productIndex}`;
                    product.id = productId;
                    product.hasVoted = userVotes[productId] || false;
                });
            }
        });

        console.log(`Загружено ${this.state.companiesArray.length} компаний`);
    }

    updateVisibleCardsCount() {
        const width = window.innerWidth;

        if (width < 768) {
            this.state.visibleCards = this.config.cardsPerPage.mobile;
        } else if (width < 1200) {
            this.state.visibleCards = this.config.cardsPerPage.tablet;
        } else if (width < 1600) {
            this.state.visibleCards = this.config.cardsPerPage.desktop;
        } else {
            this.state.visibleCards = this.config.cardsPerPage.large;
        }

        setTimeout(() => {
            this.updateScrollLine();
            this.createScrollButtonsIfNeeded();
        }, 100);
    }

    // ====================== ОСНОВНОЙ РЕНДЕРИНГ ======================
    displayProducts() {
        const totalCompanies = this.state.companiesArray.length;
        const totalProducts = this.countTotalProducts();

        // Обновляем счетчик товаров
        if (this.elements.totalProductsCount) {
            this.elements.totalProductsCount.textContent = totalProducts;
        }

        if (totalCompanies === 0) {
            this.renderEmptyState();
            return;
        }

        const currentCompany = this.state.companiesArray[this.state.currentCompanyIndex];
        const currentProducts = currentCompany.products || [];
        const totalProductsInCompany = currentProducts.length;

        // Рендерим пагинацию
        this.renderPagination();

        // Рендерим карточки товаров
        this.renderProductCards(currentCompany, currentProducts);

        // Обновляем скролл-линию
        this.updateScrollElements(totalProductsInCompany);

        this.addEventListeners();
        this.initHorizontalScroll();
        this.createScrollButtonsIfNeeded();
    }

    renderEmptyState() {
        this.elements.productsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-building"></i>
                <h2>Компании не найдены</h2>
                <p>Нет доступных компаний для отображения</p>
            </div>
        `;

        if (this.elements.topPagination) this.elements.topPagination.innerHTML = '';
        if (this.elements.bottomPagination) this.elements.bottomPagination.innerHTML = '';
        if (this.elements.scrollLineContainer) this.elements.scrollLineContainer.style.display = 'none';
        this.removeScrollButtons();
    }

    renderPagination() {
        const totalCompanies = this.state.companiesArray.length;
        const currentCompany = this.state.companiesArray[this.state.currentCompanyIndex];
        const currentProducts = currentCompany.products || [];
        const totalProductsInCompany = currentProducts.length;
        const displayedProducts = Math.min(this.state.visibleCards, totalProductsInCompany);

        [this.elements.topPagination, this.elements.bottomPagination].forEach(container => {
            if (!container) return;

            const isTopPagination = container.id === 'topPagination';
            const currentCompanyNumber = this.state.currentCompanyIndex + 1;

            // Определяем диапазон отображаемых кнопок
            let start = Math.max(1, currentCompanyNumber - 1);
            let end = Math.min(totalCompanies, start + this.config.visiblePaginationButtons - 1);

            // Корректируем начало, если мы в конце списка
            if (end === totalCompanies) {
                start = Math.max(1, totalCompanies - this.config.visiblePaginationButtons + 1);
            }

            let paginationHTML = `
                <div class="top-pagination">
                    <div class="company-info">
                        <a href="#" class="companyKP">Посмотреть презентацию компании</a>
                        <div class="pagination-info">
                            <strong>${currentCompany.name}</strong>
                            <div class="pagination-subinfo">
                                Компания ${currentCompanyNumber} из ${totalCompanies}
                            </div>
                        </div>
                    </div>   
                    <div class="pagination-controls">
                        <button class="pagination-btn prev-btn" 
                                ${this.state.currentCompanyIndex === 0 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="pagination-numbers">
            `;

            // Добавляем первую страницу, если она не входит в текущий диапазон
            if (start > 1) {
                paginationHTML += `
                    <div class="page-number" data-company="0">1</div>
                    ${start > 2 ? '<span class="pagination-dots">...</span>' : ''}
                `;
            }

            // Добавляем кнопки в текущем диапазоне
            for (let i = start; i <= end; i++) {
                const companyIndex = i - 1;
                paginationHTML += `
                    <div class="page-number ${this.state.currentCompanyIndex === companyIndex ? 'active' : ''}" 
                         data-company="${companyIndex}">${i}</div>
                `;
            }

            // Добавляем последнюю страницу, если она не входит в текущий диапазон
            if (end < totalCompanies) {
                paginationHTML += `
                    ${end < totalCompanies - 1 ? '<span class="pagination-dots">...</span>' : ''}
                    <div class="page-number" data-company="${totalCompanies - 1}">${totalCompanies}</div>
                `;
            }

            paginationHTML += `
                        </div>
                        
                        <button class="pagination-btn next-btn" 
                                ${this.state.currentCompanyIndex === totalCompanies - 1 ? 'disabled' : ''}>
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            `;

            container.innerHTML = paginationHTML;

            // Добавляем обработчики для кнопок пагинации
            this.bindPaginationEvents(container, isTopPagination);
        });
    }

    bindPaginationEvents(container, isTopPagination) {
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');
        const companyNumbers = container.querySelectorAll('.page-number[data-company]');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (this.state.currentCompanyIndex > 0) {
                    this.goToCompany(this.state.currentCompanyIndex - 1, !isTopPagination);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (this.state.currentCompanyIndex < this.state.companiesArray.length - 1) {
                    this.goToCompany(this.state.currentCompanyIndex + 1, !isTopPagination);
                }
            });
        }

        companyNumbers.forEach(number => {
            number.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const companyIndex = parseInt(number.getAttribute('data-company'));
                this.goToCompany(companyIndex, !isTopPagination);
            });
        });
    }

    renderProductCards(company, products) {
        let productsHTML = '';

        if (products.length === 0) {
            productsHTML = `
                <div class="empty-company">
                    <i class="fas fa-box"></i>
                    <h3>Нет товаров</h3>
                    <p>У компании "${company.name}" нет доступных товаров</p>
                </div>
            `;
        } else {
            products.forEach((product, index) => {
                const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';
                const shortDescription = this.truncateTextByWords(product.description, this.config.maxWords);
                const shortComposition = this.truncateTextByWords(product.composition, this.config.maxWords);

                productsHTML += `
                    <div class="product-card" data-product-id="${product.id}" data-index="${index}">
                        <div class="product-image">
                            <img src="${product.photo?.dataUrl || 'img/defaultFoto.jpg'}" 
                                 alt="${product.productName}" 
                                 loading="lazy"
                                 onerror="this.src='https://picsum.photos/400/300'"
                                 class="product-img-clickable">
                        </div>
                        
                        <div class="product-content">
                            <div class="top-block">
                                <div class="name-block">                           
                                    <h3 class="product-name">${product.productName}</h3>  
                                    
                                    <div class="manufacturer-info">
                                        <div class="location">
                                            <i class="fas fa-map-marker-alt"></i> ${product.country || 'Не указано'} / ${product.city || 'Не указано'}
                                        </div>                                
                                    </div>
                                </div>
                                <!-- Описание -->
                                <div class="description-section">
                                    <div class="section-title">
                                        <span class="grey"><i class="fas fa-file-alt"></i> Описание: </span>${shortDescription}
                                        <button class="show-more-btn" data-product-id="${product.id}" data-type="description" aria-label="Показать подробное описание">подробнее&gt;&gt;</button>
                                    </div>
                                    <div class="section-title full-text" id="full-description-${product.id}" style="display: none;">
                                        <span class="grey"><i class="fas fa-file-alt"></i> Описание: </span>${product.description || 'Нет данных'}
                                        <button class="show-less-btn" data-product-id="${product.id}" data-type="description" aria-label="Скрыть подробное описание">&lt;&lt;скрыть</button>
                                    </div>
                                </div>

                                <div class="price-section">
                                    <div class="price-bage">Цена на полке</div>
                                    <div class="price">${price} ₽</div>
                                    <div class="weight">${product.weight || '-'}</div>
                                </div>
                                
                                <div class="details-grid">
                                    <div class="detail-item">
                                        <span class="detail-label">Категория</span>
                                        <span class="detail-value">${product.category || '-'}</span>
                                    </div>
                                    <div class="detail-item">
                                        <span class="detail-label">Упаковка</span>
                                        <span class="detail-value">${product.packaging || '-'}</span>
                                    </div>                               
                                    
                                    <div class="detail-item">
                                        <span class="detail-label">Бренд</span>
                                        <span class="detail-value">${product.brand || 'Не указан'}</span>
                                    </div>
                                </div>  
                                
                                <!-- Состав -->
                                <div class="composition-section">
                                    <div class="section-title">
                                        <span class="grey"><i class="fas fa-list-ul"></i> Состав: </span>${shortComposition}
                                        <button class="show-more-btn" data-product-id="${product.id}" data-type="composition" aria-label="Показать полный состав">подробнее&gt;&gt;</button>
                                    </div>
                                    <div class="section-title full-text" id="full-composition-${product.id}" style="display: none;">
                                        <span class="grey"><i class="fas fa-list-ul"></i> Состав: </span>${product.composition || 'Нет данных'}
                                        <button class="show-less-btn" data-product-id="${product.id}" data-type="composition" aria-label="Скрыть полный состав">&lt;&lt;скрыть</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-footer">
                                <div class="vote-section">
                                    <button class="vote-btn ${product.hasVoted ? 'voted' : ''}" 
                                            data-product-id="${product.id}"
                                            ${product.hasVoted ? 'disabled' : ''}
                                            aria-label="${product.hasVoted ? 'Голос уже отдан' : 'Проголосовать за товар'}">
                                        <i class="fas fa-thumbs-up"></i>
                                        ${product.hasVoted ? 'Голос отдан' : 'Голосовать'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        this.elements.productsContainer.innerHTML = productsHTML;
        this.elements.productsContainer.scrollLeft = 0;
    }

    // ====================== УТИЛИТЫ ======================
    truncateTextByWords(text, maxWords) {
        if (!text || text.trim() === '') return 'Нет данных';

        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;

        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    }

    countTotalProducts() {
        return this.state.companiesArray.reduce((total, company) => {
            return total + (company.products ? company.products.length : 0);
        }, 0);
    }

    isBottomPaginationVisible() {
        if (!this.elements.bottomPagination || this.elements.bottomPagination.children.length === 0) return false;

        const paginationElement = this.elements.bottomPagination.querySelector('.top-pagination');
        if (!paginationElement) return false;

        const rect = paginationElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return rect.top < windowHeight && rect.bottom > 0;
    }

    // ====================== НАВИГАЦИЯ ======================
    goToCompany(companyIndex, fromBottomPagination = false) {
        if (companyIndex < 0 || companyIndex >= this.state.companiesArray.length) {
            return;
        }

        this.state.currentCompanyIndex = companyIndex;
        this.displayProducts();

        // Если клик был из нижней пагинации И нижняя пагинация видна - не скроллим
        if (fromBottomPagination && this.isBottomPaginationVisible()) {
            return;
        }

        // Плавная прокрутка к началу контейнера
        const container = document.querySelector('.container');
        if (container) {
            container.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // ====================== ОБРАБОТЧИКИ СОБЫТИЙ ======================
    bindEvents() {
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                const oldVisibleCards = this.state.visibleCards;
                this.updateVisibleCardsCount();

                if (oldVisibleCards !== this.state.visibleCards) {
                    this.displayProducts();
                }

                this.updateScrollLine();
                this.updateScrollButtonsVisibility();
            }, 250);
        });
    }

    addEventListeners() {
        // Используем делегирование событий для динамических элементов
        this.elements.productsContainer.addEventListener('click', (e) => {
            // Обработка кнопок "подробнее"
            if (e.target.classList.contains('show-more-btn') ||
                e.target.closest('.show-more-btn')) {
                const btn = e.target.classList.contains('show-more-btn')
                    ? e.target
                    : e.target.closest('.show-more-btn');
                e.preventDefault();
                this.handleShowMore(btn);
            }

            // Обработка кнопок "скрыть"
            if (e.target.classList.contains('show-less-btn') ||
                e.target.closest('.show-less-btn')) {
                const btn = e.target.classList.contains('show-less-btn')
                    ? e.target
                    : e.target.closest('.show-less-btn');
                e.preventDefault();
                this.handleShowLess(btn);
            }

            // Обработка голосования
            if (e.target.classList.contains('vote-btn') ||
                e.target.closest('.vote-btn')) {
                const btn = e.target.classList.contains('vote-btn')
                    ? e.target
                    : e.target.closest('.vote-btn');
                e.preventDefault();
                this.handleVote(btn);
            }

            // Обработка клика по изображению
            if (e.target.classList.contains('product-img-clickable') ||
                e.target.closest('.product-img-clickable')) {
                const img = e.target.classList.contains('product-img-clickable')
                    ? e.target
                    : e.target.closest('.product-img-clickable');
                e.preventDefault();
                this.openImageModal(img.src, img.alt);
            }
        });

        // Touch события для мобильных устройств
        this.elements.productsContainer.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('show-more-btn') ||
                e.target.closest('.show-more-btn')) {
                const btn = e.target.classList.contains('show-more-btn')
                    ? e.target
                    : e.target.closest('.show-more-btn');
                e.preventDefault();
                this.handleShowMore(btn);
            }

            if (e.target.classList.contains('show-less-btn') ||
                e.target.closest('.show-less-btn')) {
                const btn = e.target.classList.contains('show-less-btn')
                    ? e.target
                    : e.target.closest('.show-less-btn');
                e.preventDefault();
                this.handleShowLess(btn);
            }
        }, { passive: false });
    }

    handleShowMore(button) {
        const productId = button.getAttribute('data-product-id');
        const type = button.getAttribute('data-type');

        const fullElement = document.getElementById(`full-${type}-${productId}`);
        const sectionTitle = button.closest('.section-title');

        if (!fullElement || !sectionTitle) return;

        sectionTitle.style.display = 'none';
        fullElement.style.display = 'block';

        // Прокручиваем к раскрытому контенту на мобильных
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                fullElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 50);
        }
    }

    handleShowLess(button) {
        const productId = button.getAttribute('data-product-id');
        const type = button.getAttribute('data-type');

        const fullElement = document.getElementById(`full-${type}-${productId}`);
        const sectionElement = button.closest(`.${type}-section`);
        const sectionTitle = sectionElement.querySelector('.section-title');

        if (!fullElement || !sectionTitle) return;

        fullElement.style.display = 'none';
        sectionTitle.style.display = 'block';
    }

    handleVote(button) {
        const productId = button.getAttribute('data-product-id');

        if (button.classList.contains('voted')) {
            return;
        }

        let productFound = false;
        for (const company of this.state.companiesArray) {
            if (company.products) {
                const productIndex = company.products.findIndex(p => p.id === productId);
                if (productIndex !== -1) {
                    productFound = true;

                    let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

                    if (userVotes[productId]) {
                        this.showMessage('Вы уже отдали голос за этот товар!', 'warning');
                        return;
                    }

                    company.products[productIndex].hasVoted = true;
                    userVotes[productId] = true;
                    sessionStorage.setItem('userVotes', JSON.stringify(userVotes));

                    button.classList.add('voted');
                    button.innerHTML = '<i class="fas fa-thumbs-up"></i> Голос отдан';
                    button.disabled = true;
                    button.setAttribute('aria-label', 'Голос уже отдан');

                    this.showMessage('Ваш голос учтен! Спасибо за участие.', 'success');
                    break;
                }
            }
        }

        if (!productFound) {
            console.error('Продукт не найден:', productId);
        }
    }

    // ====================== СКРОЛЛ И ПЕРЕТАСКИВАНИЕ ======================
    initHorizontalScroll() {
        if (!this.elements.productsContainer) return;

        // Drag для контейнера
        this.elements.productsContainer.addEventListener('mousedown', (e) => this.startDrag(e));
        this.elements.productsContainer.addEventListener('touchstart', (e) => this.startDragTouch(e), { passive: false });

        // Drag для ползунка
        if (this.elements.scrollLineThumb) {
            this.elements.scrollLineThumb.addEventListener('mousedown', (e) => {
                this.startThumbDrag(e);
                document.addEventListener('mousemove', (e) => this.handleThumbDrag(e));
                document.addEventListener('mouseup', () => this.stopThumbDrag());
            });

            this.elements.scrollLineThumb.addEventListener('touchstart', (e) => {
                this.startThumbDrag(e);
                document.addEventListener('touchmove', (e) => this.handleThumbDrag(e), { passive: false });
                document.addEventListener('touchend', () => this.stopThumbDrag());
            });
        }

        // Обработчик колеса мыши
        this.elements.productsContainer.addEventListener('wheel', (e) => this.handleWheelScroll(e), { passive: false });

        // Обработчик скролла
        this.elements.productsContainer.addEventListener('scroll', () => {
            this.updateScrollLine();
            this.updateScrollButtonsVisibility();
        });

        this.updateScrollLine();
    }

    startDrag(e) {
        this.state.isDragging = true;
        this.elements.productsContainer.classList.add('grabbing');
        this.state.startX = e.pageX || e.touches[0].pageX;
        this.state.scrollLeftStart = this.elements.productsContainer.scrollLeft;

        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.endDrag());
        document.addEventListener('touchmove', (e) => this.dragTouch(e), { passive: false });
        document.addEventListener('touchend', () => this.endDrag());

        e.preventDefault();
    }

    startDragTouch(e) {
        if (e.touches.length === 1) {
            this.startDrag(e);
        }
    }

    drag(e) {
        if (!this.state.isDragging) return;

        const x = e.pageX || (e.touches && e.touches[0].pageX);
        if (!x) return;

        const walk = (x - this.state.startX) * 2;
        this.elements.productsContainer.scrollLeft = this.state.scrollLeftStart - walk;

        this.updateScrollLine();
        this.updateScrollButtonsVisibility();

        e.preventDefault();
    }

    dragTouch(e) {
        if (e.touches.length === 1) {
            this.drag(e);
        }
    }

    endDrag() {
        this.state.isDragging = false;
        this.elements.productsContainer.classList.remove('grabbing');

        document.removeEventListener('mousemove', (e) => this.drag(e));
        document.removeEventListener('touchmove', (e) => this.dragTouch(e));
        document.removeEventListener('mouseup', () => this.endDrag());
        document.removeEventListener('touchend', () => this.endDrag());
    }

    startThumbDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        this.thumbDragData.isDragging = true;
        this.thumbDragData.startX = e.clientX || e.touches[0].clientX;
        this.thumbDragData.startLeft = parseFloat(this.elements.scrollLineThumb.style.left) || 0;

        this.elements.scrollLineThumb.classList.add('grabbing');
    }

    handleThumbDrag(e) {
        if (!this.thumbDragData.isDragging) return;

        e.preventDefault();
        e.stopPropagation();

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;

        const deltaX = clientX - this.thumbDragData.startX;
        const trackWidth = this.elements.scrollLineContainer.offsetWidth;
        const thumbWidth = this.elements.scrollLineThumb.offsetWidth;
        const maxThumbPosition = trackWidth - thumbWidth;

        let newThumbPosition = this.thumbDragData.startLeft + deltaX;
        newThumbPosition = Math.max(0, Math.min(newThumbPosition, maxThumbPosition));

        this.elements.scrollLineThumb.style.left = newThumbPosition + 'px';

        const scrollRatio = maxThumbPosition > 0 ? newThumbPosition / maxThumbPosition : 0;
        const maxScroll = this.elements.productsContainer.scrollWidth - this.elements.productsContainer.clientWidth;
        this.elements.productsContainer.scrollLeft = scrollRatio * maxScroll;

        this.updateScrollButtonsVisibility();
    }

    stopThumbDrag() {
        this.thumbDragData.isDragging = false;
        this.elements.scrollLineThumb.classList.remove('grabbing');

        document.removeEventListener('mousemove', (e) => this.handleThumbDrag(e));
        document.removeEventListener('mouseup', () => this.stopThumbDrag());
        document.removeEventListener('touchmove', (e) => this.handleThumbDrag(e));
        document.removeEventListener('touchend', () => this.stopThumbDrag());
    }

    handleWheelScroll(e) {
        const container = this.elements.productsContainer;
        const isHorizontalScrollAvailable = container.scrollWidth > container.clientWidth;

        if (!isHorizontalScrollAvailable) {
            return;
        }

        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

        if (isHorizontalScroll || e.shiftKey) {
            container.scrollLeft += e.deltaX || e.deltaY;
            this.updateScrollLine();
            this.updateScrollButtonsVisibility();
            e.preventDefault();
        } else {
            const isAtStart = container.scrollLeft === 0;
            const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;

            if (!isAtStart && !isAtEnd) {
                return;
            }

            if (isAtStart && e.deltaY > 0) {
                container.scrollLeft += 50;
            } else if (isAtEnd && e.deltaY < 0) {
                container.scrollLeft -= 50;
            }
        }
    }

    updateScrollLine() {
        if (!this.elements.scrollLineThumb || !this.elements.productsContainer || !this.elements.scrollLineContainer) return;

        const containerWidth = this.elements.productsContainer.clientWidth;
        const scrollWidth = this.elements.productsContainer.scrollWidth;
        const scrollLeft = this.elements.productsContainer.scrollLeft;
        const maxScroll = Math.max(0, scrollWidth - containerWidth);

        if (maxScroll <= 0 || containerWidth === 0 || scrollWidth === 0) {
            this.elements.scrollLineThumb.style.width = '100%';
            this.elements.scrollLineThumb.style.left = '0';
            return;
        }

        const trackWidth = this.elements.scrollLineContainer.offsetWidth;
        const thumbWidth = Math.max(60, (containerWidth / scrollWidth) * trackWidth);
        this.elements.scrollLineThumb.style.width = thumbWidth + 'px';

        const maxThumbPosition = Math.max(0, trackWidth - thumbWidth);
        const thumbPosition = maxScroll > 0 ? (scrollLeft / maxScroll) * maxThumbPosition : 0;

        this.elements.scrollLineThumb.style.left = thumbPosition + 'px';
    }

    updateScrollElements(totalProductsInCompany) {
        if (this.elements.scrollLineContainer) {
            if (totalProductsInCompany > this.state.visibleCards) {
                this.elements.scrollLineContainer.style.display = 'block';
                setTimeout(() => this.updateScrollLine(), 100);
            } else {
                this.elements.scrollLineContainer.style.display = 'none';
            }
        }
    }

    // ====================== КНОПКИ ПРОКРУТКИ ======================
    createScrollButtonsIfNeeded() {
        this.removeScrollButtons();

        if (!this.elements.productsContainer || this.state.companiesArray.length === 0) return;

        const currentCompany = this.state.companiesArray[this.state.currentCompanyIndex];
        if (!currentCompany || !currentCompany.products) return;

        const totalProductsInCompany = currentCompany.products.length;

        if (totalProductsInCompany > this.state.visibleCards) {
            const productsWrapper = this.elements.productsContainer.parentElement;

            const leftButton = document.createElement('button');
            leftButton.className = 'scroll-arrow left';
            leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            leftButton.style.cssText = `
                position: absolute;
                left: -20px;
                top: 50%;
                transform: translateY(-50%);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: white;
                border: none;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                color: var(--darckGrey);
                z-index: 10;
                transition: all 0.2s;
            `;
            leftButton.setAttribute('aria-label', 'Прокрутить влево');

            const rightButton = document.createElement('button');
            rightButton.className = 'scroll-arrow right';
            rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            rightButton.style.cssText = leftButton.style.cssText;
            rightButton.style.left = 'auto';
            rightButton.style.right = '-20px';
            rightButton.setAttribute('aria-label', 'Прокрутить вправо');

            productsWrapper.style.position = 'relative';
            productsWrapper.appendChild(leftButton);
            productsWrapper.appendChild(rightButton);

            leftButton.addEventListener('click', () => {
                this.elements.productsContainer.scrollLeft -= this.elements.productsContainer.clientWidth * 0.8;
                this.updateScrollLine();
                this.updateScrollButtonsVisibility();
            });

            rightButton.addEventListener('click', () => {
                this.elements.productsContainer.scrollLeft += this.elements.productsContainer.clientWidth * 0.8;
                this.updateScrollLine();
                this.updateScrollButtonsVisibility();
            });

            this.updateScrollButtonsVisibility();
            this.elements.productsContainer.addEventListener('scroll', () => this.updateScrollButtonsVisibility());
        }
    }

    removeScrollButtons() {
        const productsWrapper = this.elements.productsContainer.parentElement;
        if (!productsWrapper) return;

        const leftButton = productsWrapper.querySelector('.scroll-arrow.left');
        const rightButton = productsWrapper.querySelector('.scroll-arrow.right');

        if (leftButton) leftButton.remove();
        if (rightButton) rightButton.remove();

        this.elements.productsContainer.removeEventListener('scroll', () => this.updateScrollButtonsVisibility());
    }

    updateScrollButtonsVisibility() {
        const productsWrapper = this.elements.productsContainer.parentElement;
        if (!productsWrapper) return;

        const leftButton = productsWrapper.querySelector('.scroll-arrow.left');
        const rightButton = productsWrapper.querySelector('.scroll-arrow.right');

        if (!leftButton || !rightButton) return;

        const scrollLeft = this.elements.productsContainer.scrollLeft;
        const maxScroll = this.elements.productsContainer.scrollWidth - this.elements.productsContainer.clientWidth;

        leftButton.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        leftButton.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';

        rightButton.style.opacity = scrollLeft < maxScroll - 5 ? '1' : '0.5';
        rightButton.style.pointerEvents = scrollLeft < maxScroll - 5 ? 'auto' : 'none';
    }

    // ====================== МОДАЛЬНОЕ ОКНО ДЛЯ ИЗОБРАЖЕНИЙ ======================
    createImageModal() {
        this.modal.overlay = document.createElement('div');
        this.modal.overlay.className = 'image-modal-overlay';
        this.modal.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            display: none;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            cursor: pointer;
        `;

        this.modal.image = document.createElement('img');
        this.modal.image.className = 'modal-image';
        this.modal.image.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transform: scale(0.9);
            transition: transform 0.3s ease;
            cursor: default;
        `;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: #fff;
            color: #333;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 2001;
        `;
        closeBtn.setAttribute('aria-label', 'Закрыть модальное окно');

        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.transform = 'scale(1.1)';
            closeBtn.style.background = '#ff4444';
            closeBtn.style.color = '#fff';
        });

        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.transform = 'scale(1)';
            closeBtn.style.background = '#fff';
            closeBtn.style.color = '#333';
        });

        this.modal.overlay.appendChild(this.modal.image);
        this.modal.overlay.appendChild(closeBtn);
        document.body.appendChild(this.modal.overlay);

        // Закрытие по клику
        this.modal.overlay.addEventListener('click', (e) => {
            if (e.target === this.modal.overlay || e.target === closeBtn) {
                this.closeImageModal();
            }
        });

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.overlay.style.display !== 'none') {
                this.closeImageModal();
            }
        });
    }

    openImageModal(imageSrc, altText) {
        if (!this.modal.overlay) {
            this.createImageModal();
        }

        this.modal.image.src = imageSrc;
        this.modal.image.alt = altText || 'Увеличенное изображение товара';

        this.modal.overlay.style.display = 'flex';
        setTimeout(() => {
            this.modal.overlay.style.opacity = '1';
            this.modal.image.style.transform = 'scale(1)';
        }, 10);

        document.body.style.overflow = 'hidden';
    }

    closeImageModal() {
        if (!this.modal.overlay) return;

        this.modal.overlay.style.opacity = '0';
        this.modal.image.style.transform = 'scale(0.9)';

        setTimeout(() => {
            this.modal.overlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    // ====================== УВЕДОМЛЕНИЯ ======================
    showMessage(message, type = 'info') {
        const existingMessages = document.querySelectorAll('.app-message');
        existingMessages.forEach(msg => msg.remove());

        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };

        const messageElement = document.createElement('div');
        messageElement.className = `app-message ${type}`;
        messageElement.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${colors[type] || colors.info};
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease;
                max-width: 400px;
                word-wrap: break-word;
            ">
                <i class="fas ${type === 'success' ? 'fa-check-circle' :
                type === 'error' ? 'fa-exclamation-circle' :
                    type === 'warning' ? 'fa-exclamation-triangle' :
                        'fa-info-circle'}"></i>
                ${message}
            </div>
        `;

        document.body.appendChild(messageElement);

        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }

    // ====================== ПУБЛИЧНЫЕ МЕТОДЫ ======================
    refresh() {
        this.initProductsData();
        this.displayProducts();
    }

    getCurrentCompany() {
        return this.state.companiesArray[this.state.currentCompanyIndex];
    }

    getTotalProducts() {
        return this.countTotalProducts();
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    // Создаем глобальную переменную для доступа к каталогу
    window.productCatalog = new ProductCatalog();

    // Глобальная функция для обновления данных
    window.refreshProducts = function () {
        if (window.productCatalog) {
            window.productCatalog.refresh();
        }
    };
});