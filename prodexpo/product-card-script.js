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
document.addEventListener('DOMContentLoaded', function () {
    // Элементы DOM
    const topPagination = document.getElementById('topPagination');
    const bottomPagination = document.getElementById('bottomPagination');
    const productsContainer = document.getElementById('productsContainer');
    const totalProductsCount = document.getElementById('totalProductsCount');
    const scrollLineContainer = document.getElementById('scrollLineContainer');
    const scrollLineThumb = document.getElementById('scrollLineThumb');

    // Конфигурация
    const MAX_WORDS = 3;
    const CARDS_PER_PAGE = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 5
    };
    const VISIBLE_PAGINATION_BUTTONS = 3;

    let currentCompanyIndex = 0;
    let companiesArray = [];
    let visibleCards = 3;
    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    
    // Данные для перетаскивания ползунка
    let thumbDragData = {
        isDragging: false,
        startX: 0,
        startLeft: 0
    };

    // Флаг для блокировки горизонтального скролла колесиком
    let wheelScrollLock = false;

    // Модальное окно для увеличения изображений
    let modalOverlay = null;
    let modalImage = null;

    // Создание модального окна для увеличения изображений
    function createImageModal() {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'image-modal-overlay';
        modalOverlay.style.cssText = `
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

        modalImage = document.createElement('img');
        modalImage.className = 'modal-image';
        modalImage.style.cssText = `
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

        modalOverlay.appendChild(modalImage);
        modalOverlay.appendChild(closeBtn);
        document.body.appendChild(modalOverlay);

        // Закрытие по клику на оверлей или кнопку
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay || e.target === closeBtn) {
                closeImageModal();
            }
        });

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.style.display !== 'none') {
                closeImageModal();
            }
        });
    }

    // Функция открытия модального окна с изображением
    function openImageModal(imageSrc, altText) {
        if (!modalOverlay) {
            createImageModal();
        }

        modalImage.src = imageSrc;
        modalImage.alt = altText || 'Увеличенное изображение товара';

        // Показываем модальное окно
        modalOverlay.style.display = 'flex';
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
            modalImage.style.transform = 'scale(1)';
        }, 10);

        document.body.style.overflow = 'hidden';
    }

    // Функция закрытия модального окна
    function closeImageModal() {
        if (!modalOverlay) return;

        modalOverlay.style.opacity = '0';
        modalImage.style.transform = 'scale(0.9)';

        setTimeout(() => {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    // Функция для проверки видимости нижней пагинации
    function isBottomPaginationVisible() {
        if (!bottomPagination || bottomPagination.children.length === 0) return false;
        
        const paginationElement = bottomPagination.querySelector('.top-pagination');
        if (!paginationElement) return false;
        
        const rect = paginationElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return rect.top < windowHeight && rect.bottom > 0;
    }

    // Инициализация данных
    function initProductsData() {
        companiesArray = productsArray || [];

        let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

        companiesArray.forEach(company => {
            if (company.products && Array.isArray(company.products)) {
                company.products.forEach((product, productIndex) => {
                    const productId = `company_${company.eventId}_product_${productIndex}`;
                    product.id = productId;
                    product.hasVoted = userVotes[productId] || false;
                });
            }
        });

        console.log(`Загружено ${companiesArray.length} компаний`);
        updateVisibleCardsCount();
    }

    // Обновление количества видимых карточек
    function updateVisibleCardsCount() {
        const width = window.innerWidth;

        if (width < 768) {
            visibleCards = CARDS_PER_PAGE.mobile;
        } else if (width < 1200) {
            visibleCards = CARDS_PER_PAGE.tablet;
        } else if (width < 1600) {
            visibleCards = CARDS_PER_PAGE.desktop;
        } else {
            visibleCards = CARDS_PER_PAGE.large;
        }
        
        setTimeout(() => {
            updateScrollLine();
            createScrollButtonsIfNeeded();
        }, 100);
    }

    // Подсчет общего количества товаров
    function countTotalProducts() {
        return companiesArray.reduce((total, company) => {
            return total + (company.products ? company.products.length : 0);
        }, 0);
    }

    // Сокращение текста по словам
    function truncateTextByWords(text, maxWords) {
        if (!text || text.trim() === '') return 'Нет данных';

        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;

        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    }

    // Отображение карточек товаров
    function displayProducts() {
        const totalCompanies = companiesArray.length;
        const totalProducts = countTotalProducts();

        if (totalProductsCount) {
            totalProductsCount.textContent = totalProducts;
        }

        if (totalCompanies === 0) {
            productsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-building"></i>
                    <h2>Компании не найдены</h2>
                    <p>Нет доступных компаний для отображения</p>
                </div>
            `;
            if (topPagination) topPagination.innerHTML = '';
            if (bottomPagination) bottomPagination.innerHTML = '';
            if (scrollLineContainer) scrollLineContainer.style.display = 'none';
            removeScrollButtons();
            return;
        }

        const currentCompany = companiesArray[currentCompanyIndex];
        const currentProducts = currentCompany.products || [];
        const totalProductsInCompany = currentProducts.length;
        const displayedProducts = Math.min(visibleCards, totalProductsInCompany);

        // Отображаем пагинацию
        if (topPagination) {
            displayPagination(topPagination, currentCompany, displayedProducts, totalCompanies, totalProductsInCompany);
        }
        if (bottomPagination) {
            displayPagination(bottomPagination, currentCompany, displayedProducts, totalCompanies, totalProductsInCompany);
        }

        // Отображаем карточки товаров
        let productsHTML = '';

        if (totalProductsInCompany === 0) {
            productsHTML = `
                <div class="empty-company">
                    <i class="fas fa-box"></i>
                    <h3>Нет товаров</h3>
                    <p>У компании "${currentCompany.name}" нет доступных товаров</p>
                </div>
            `;
        } else {
            currentProducts.forEach((product, index) => {
                const price = typeof product.price === 'number' ? product.price.toFixed(2) : '0.00';

                const shortDescription = truncateTextByWords(product.description, MAX_WORDS);
                const shortComposition = truncateTextByWords(product.composition, MAX_WORDS);

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
                                        <div class="show-more-btn" data-product-id="${product.id}" data-type="description">подробнее&gt;&gt;</div>
                                    </div>
                                    <div class="section-title full-text" id="full-description-${product.id}" style="display: none;">
                                        <span class="grey"><i class="fas fa-file-alt"></i> Описание: </span>${product.description || 'Нет данных'}
                                        <div class="show-less-btn" data-product-id="${product.id}" data-type="description">&lt;&lt;скрыть</div>
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
                                        <div class="show-more-btn" data-product-id="${product.id}" data-type="composition">подробнее&gt;&gt;</div>
                                    </div>
                                    <div class="section-title full-text" id="full-composition-${product.id}" style="display: none;">
                                        <span class="grey"><i class="fas fa-list-ul"></i> Состав: </span>${product.composition || 'Нет данных'}
                                        <div class="show-less-btn" data-product-id="${product.id}" data-type="composition">&lt;&lt;скрыть</div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-footer">
                                <div class="vote-section">
                                    <button class="vote-btn ${product.hasVoted ? 'voted' : ''}" 
                                            data-product-id="${product.id}"
                                            ${product.hasVoted ? 'disabled' : ''}>
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

        productsContainer.innerHTML = productsHTML;

        if (scrollLineContainer) {
            if (totalProductsInCompany > visibleCards) {
                scrollLineContainer.style.display = 'block';
                setTimeout(updateScrollLine, 100);
            } else {
                scrollLineContainer.style.display = 'none';
            }
        }

        addEventListeners();
        initHorizontalScroll();
        createScrollButtonsIfNeeded();
    }

    // Функция для отображения динамической пагинации
    function displayPagination(containerElement, currentCompany, displayedProducts, totalCompanies, totalProductsInCompany) {
        if (!containerElement || totalCompanies === 0) {
            if (containerElement) containerElement.innerHTML = '';
            return;
        }

        const currentCompanyNumber = currentCompanyIndex + 1;
        const isTopPagination = containerElement.id === 'topPagination';
        
        // Определяем диапазон отображаемых кнопок
        let start = Math.max(1, currentCompanyNumber - 1);
        let end = Math.min(totalCompanies, start + VISIBLE_PAGINATION_BUTTONS - 1);
        
        // Корректируем начало, если мы в конце списка
        if (end === totalCompanies) {
            start = Math.max(1, totalCompanies - VISIBLE_PAGINATION_BUTTONS + 1);
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
                            ${currentCompanyIndex === 0 ? 'disabled' : ''}>
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
                <div class="page-number ${currentCompanyIndex === companyIndex ? 'active' : ''}" 
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
                            ${currentCompanyIndex === totalCompanies - 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;

        containerElement.innerHTML = paginationHTML;

        // Добавляем обработчики для кнопок
        const prevBtn = containerElement.querySelector('.prev-btn');
        const nextBtn = containerElement.querySelector('.next-btn');
        const companyNumbers = containerElement.querySelectorAll('.page-number[data-company]');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                if (currentCompanyIndex > 0) {
                    goToCompany(currentCompanyIndex - 1, !isTopPagination);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                if (currentCompanyIndex < totalCompanies - 1) {
                    goToCompany(currentCompanyIndex + 1, !isTopPagination);
                }
            });
        }

        companyNumbers.forEach(number => {
            number.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                const companyIndex = parseInt(this.getAttribute('data-company'));
                goToCompany(companyIndex, !isTopPagination);
            });
        });
    }

    // Функция для перехода к указанной компании
    function goToCompany(companyIndex, fromBottomPagination = false) {
        if (companyIndex < 0 || companyIndex >= companiesArray.length) {
            return;
        }

        currentCompanyIndex = companyIndex;
        displayProducts();
        
        productsContainer.scrollLeft = 0;
        updateScrollLine();
        
        // Если клик был из нижней пагинации И нижняя пагинация видна - не скроллим
        if (fromBottomPagination && isBottomPaginationVisible()) {
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

    // Инициализация горизонтального скролла
    function initHorizontalScroll() {
        if (!productsContainer) return;
        
        // Удаляем старые обработчики
        document.removeEventListener('mousemove', handleThumbDrag);
        document.removeEventListener('mouseup', stopThumbDrag);
        document.removeEventListener('touchmove', handleThumbDrag);
        document.removeEventListener('touchend', stopThumbDrag);
        
        // Добавляем обработчики drag для контейнера
        productsContainer.addEventListener('mousedown', startDrag);
        productsContainer.addEventListener('touchstart', startDragTouch, { passive: false });
        
        // Добавляем обработчики для ползунка
        if (scrollLineThumb) {
            scrollLineThumb.addEventListener('mousedown', (e) => {
                startThumbDrag(e);
                document.addEventListener('mousemove', handleThumbDrag);
                document.addEventListener('mouseup', stopThumbDrag);
                document.addEventListener('touchmove', handleThumbDrag, { passive: false });
                document.addEventListener('touchend', stopThumbDrag);
            });
            
            scrollLineThumb.addEventListener('touchstart', (e) => {
                startThumbDrag(e);
                document.addEventListener('touchmove', handleThumbDrag, { passive: false });
                document.addEventListener('touchend', stopThumbDrag);
            });
        }
        
        // Добавляем обработчик колеса мыши - с правильной логикой
        productsContainer.addEventListener('wheel', handleWheelScroll, { passive: false });
        
        updateScrollLine();
    }

    function startDrag(e) {
        isDragging = true;
        productsContainer.classList.add('grabbing');
        startX = e.pageX || e.touches[0].pageX;
        scrollLeftStart = productsContainer.scrollLeft;
        
        // Добавляем глобальные обработчики для перетаскивания
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', dragTouch, { passive: false });
        document.addEventListener('touchend', endDrag);
        
        // Отменяем выделение текста при перетаскивании
        e.preventDefault();
    }

    function startDragTouch(e) {
        if (e.touches.length === 1) {
            startDrag(e);
        }
    }

    function drag(e) {
        if (!isDragging) return;
        
        const x = e.pageX || (e.touches && e.touches[0].pageX);
        if (!x) return;
        
        const walk = (x - startX) * 2;
        productsContainer.scrollLeft = scrollLeftStart - walk;
        
        updateScrollLine();
        updateScrollButtonsVisibility();
        
        e.preventDefault();
    }

    function dragTouch(e) {
        if (e.touches.length === 1) {
            drag(e);
        }
    }

    function endDrag() {
        isDragging = false;
        productsContainer.classList.remove('grabbing');
        
        // Удаляем глобальные обработчики drag для контейнера
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', dragTouch);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    }

    // Функции для перетаскивания ползунка
    function startThumbDrag(e) {
        e.preventDefault();
        e.stopPropagation();
        
        thumbDragData.isDragging = true;
        thumbDragData.startX = e.clientX || e.touches[0].clientX;
        thumbDragData.startLeft = parseFloat(scrollLineThumb.style.left) || 0;
        
        scrollLineThumb.classList.add('grabbing');
    }

    function handleThumbDrag(e) {
        if (!thumbDragData.isDragging) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;
        
        const deltaX = clientX - thumbDragData.startX;
        const trackWidth = scrollLineContainer.offsetWidth;
        const thumbWidth = scrollLineThumb.offsetWidth;
        const maxThumbPosition = trackWidth - thumbWidth;
        
        // Новая позиция ползунка
        let newThumbPosition = thumbDragData.startLeft + deltaX;
        newThumbPosition = Math.max(0, Math.min(newThumbPosition, maxThumbPosition));
        
        // Обновляем позицию ползунка
        scrollLineThumb.style.left = newThumbPosition + 'px';
        
        // Обновляем скролл контейнера
        const scrollRatio = maxThumbPosition > 0 ? newThumbPosition / maxThumbPosition : 0;
        const maxScroll = productsContainer.scrollWidth - productsContainer.clientWidth;
        productsContainer.scrollLeft = scrollRatio * maxScroll;
        
        updateScrollButtonsVisibility();
    }

    function stopThumbDrag() {
        thumbDragData.isDragging = false;
        scrollLineThumb.classList.remove('grabbing');
        
        // Удаляем глобальные обработчики
        document.removeEventListener('mousemove', handleThumbDrag);
        document.removeEventListener('mouseup', stopThumbDrag);
        document.removeEventListener('touchmove', handleThumbDrag);
        document.removeEventListener('touchend', stopThumbDrag);
    }

    // ИСПРАВЛЕННАЯ ФУНКЦИЯ: Обработчик колеса мыши
   // Современный подход с проверкой направления скролла
function handleWheelScroll(e) {
    const container = productsContainer;
    const isHorizontalScrollAvailable = container.scrollWidth > container.clientWidth;
    
    // Если горизонтальной прокрутки нет, ничего не делаем
    if (!isHorizontalScrollAvailable) {
        return;
    }
    
    // Определяем основное направление скролла
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    
    if (isHorizontalScroll || e.shiftKey) {
        // Горизонтальный скролл
        container.scrollLeft += e.deltaX || e.deltaY;
        updateScrollLine();
        updateScrollButtonsVisibility();
        e.preventDefault();
    } else {
        // Вертикальный скролл - разрешаем
        // Можно добавить небольшую логику для улучшения UX
        const isAtStart = container.scrollLeft === 0;
        const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
        
        // Если контейнер не находится в крайних позициях, разрешаем вертикальный скролл
        if (!isAtStart && !isAtEnd) {
            return;
        }
        
        // Если в крайней позиции, можно слегка сместить горизонтально
        if (isAtStart && e.deltaY > 0) {
            container.scrollLeft += 50;
        } else if (isAtEnd && e.deltaY < 0) {
            container.scrollLeft -= 50;
        }
    }
}

    // Обновленная функция updateScrollLine
    function updateScrollLine() {
        if (!scrollLineThumb || !productsContainer || !scrollLineContainer) return;
        
        const containerWidth = productsContainer.clientWidth;
        const scrollWidth = productsContainer.scrollWidth;
        const scrollLeft = productsContainer.scrollLeft;
        const maxScroll = Math.max(0, scrollWidth - containerWidth);
        
        if (maxScroll <= 0 || containerWidth === 0 || scrollWidth === 0) {
            scrollLineThumb.style.width = '100%';
            scrollLineThumb.style.left = '0';
            return;
        }
        
        const trackWidth = scrollLineContainer.offsetWidth;
        
        // Вычисляем ширину ползунка (не менее 60px)
        const thumbWidth = Math.max(60, (containerWidth / scrollWidth) * trackWidth);
        scrollLineThumb.style.width = thumbWidth + 'px';
        
        // Вычисляем позицию ползунка
        const maxThumbPosition = Math.max(0, trackWidth - thumbWidth);
        const thumbPosition = maxScroll > 0 ? (scrollLeft / maxScroll) * maxThumbPosition : 0;
        
        scrollLineThumb.style.left = thumbPosition + 'px';
    }

    // Создание кнопок для прокрутки карточек
    function createScrollButtonsIfNeeded() {
        // Удаляем старые кнопки, если они есть
        removeScrollButtons();
        
        if (!productsContainer || companiesArray.length === 0) return;
        
        const currentCompany = companiesArray[currentCompanyIndex];
        if (!currentCompany || !currentCompany.products) return;
        
        const totalProductsInCompany = currentCompany.products.length;
        
        // Проверяем, нужны ли кнопки прокрутки
        if (totalProductsInCompany > visibleCards) {
            const productsWrapper = productsContainer.parentElement;
            
            // Создаем кнопку "влево"
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
            
            // Создаем кнопку "вправо"
            const rightButton = document.createElement('button');
            rightButton.className = 'scroll-arrow right';
            rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            rightButton.style.cssText = leftButton.style.cssText;
            rightButton.style.left = 'auto';
            rightButton.style.right = '-20px';
            
            // Добавляем кнопки в обертку
            productsWrapper.style.position = 'relative';
            productsWrapper.appendChild(leftButton);
            productsWrapper.appendChild(rightButton);
            
            // Добавляем обработчики
            leftButton.addEventListener('click', () => {
                productsContainer.scrollLeft -= productsContainer.clientWidth * 0.8;
                updateScrollLine();
                updateScrollButtonsVisibility();
            });
            
            rightButton.addEventListener('click', () => {
                productsContainer.scrollLeft += productsContainer.clientWidth * 0.8;
                updateScrollLine();
                updateScrollButtonsVisibility();
            });
            
            // Обновляем видимость кнопок
            updateScrollButtonsVisibility();
            
            // Обновляем видимость кнопок при скролле
            productsContainer.addEventListener('scroll', updateScrollButtonsVisibility);
        }
    }
    
    // Удаление кнопок прокрутки
    function removeScrollButtons() {
        const productsWrapper = productsContainer.parentElement;
        if (!productsWrapper) return;
        
        const leftButton = productsWrapper.querySelector('.scroll-arrow.left');
        const rightButton = productsWrapper.querySelector('.scroll-arrow.right');
        
        if (leftButton) leftButton.remove();
        if (rightButton) rightButton.remove();
        
        productsContainer.removeEventListener('scroll', updateScrollButtonsVisibility);
    }
    
    // Обновление видимости кнопок прокрутки
    function updateScrollButtonsVisibility() {
        const productsWrapper = productsContainer.parentElement;
        if (!productsWrapper) return;
        
        const leftButton = productsWrapper.querySelector('.scroll-arrow.left');
        const rightButton = productsWrapper.querySelector('.scroll-arrow.right');
        
        if (!leftButton || !rightButton) return;
        
        // Проверяем позицию скролла
        const scrollLeft = productsContainer.scrollLeft;
        const maxScroll = productsContainer.scrollWidth - productsContainer.clientWidth;
        
        // Показываем/скрываем кнопки в зависимости от позиции скролла
        leftButton.style.opacity = scrollLeft > 0 ? '1' : '0.5';
        leftButton.style.pointerEvents = scrollLeft > 0 ? 'auto' : 'none';
        
        rightButton.style.opacity = scrollLeft < maxScroll - 5 ? '1' : '0.5';
        rightButton.style.pointerEvents = scrollLeft < maxScroll - 5 ? 'auto' : 'none';
    }

    // Добавление обработчиков событий (включая клики по изображениям)
    function addEventListeners() {
        // Обработчики для кнопок "подробнее"
        document.querySelectorAll('.show-more-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const productId = this.getAttribute('data-product-id');
                const type = this.getAttribute('data-type');

                const fullElement = document.getElementById(`full-${type}-${productId}`);
                const sectionTitle = this.closest('.section-title');

                if (!fullElement || !sectionTitle) return;

                sectionTitle.style.display = 'none';
                fullElement.style.display = 'block';
            });
        });

        // Обработчики для кнопок "скрыть"
        document.querySelectorAll('.show-less-btn').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const productId = this.getAttribute('data-product-id');
                const type = this.getAttribute('data-type');

                const fullElement = document.getElementById(`full-${type}-${productId}`);
                const sectionElement = this.closest(`.${type}-section`);
                const sectionTitle = sectionElement.querySelector('.section-title');

                if (!fullElement || !sectionTitle) return;

                fullElement.style.display = 'none';
                sectionTitle.style.display = 'block';
            });
        });

        // Обработчики для кликов по изображениям товаров (увеличение)
        document.querySelectorAll('.product-img-clickable').forEach(img => {
            img.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const imageSrc = this.src;
                const altText = this.alt || 'Изображение товара';

                openImageModal(imageSrc, altText);
            });

            // Добавляем курсор-указатель для изображений
            img.style.cursor = 'pointer';

            // Добавляем эффект при наведении
            img.addEventListener('mouseenter', function () {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });

            img.addEventListener('mouseleave', function () {
                this.style.transform = 'scale(1)';
            });
        });

        // Обработчики для кнопок голосования
        document.querySelectorAll('.vote-btn:not(.voted)').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');

                let productFound = false;
                for (const company of companiesArray) {
                    if (company.products) {
                        const productIndex = company.products.findIndex(p => p.id === productId);
                        if (productIndex !== -1) {
                            productFound = true;

                            let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

                            if (userVotes[productId]) {
                                alert('Вы уже отдали голос за этот товар!');
                                return;
                            }

                            company.products[productIndex].hasVoted = true;
                            userVotes[productId] = true;
                            sessionStorage.setItem('userVotes', JSON.stringify(userVotes));

                            this.classList.add('voted');
                            this.innerHTML = '<i class="fas fa-thumbs-up"></i> Голос отдан';
                            this.disabled = true;

                            showSuccessMessage('Ваш голос учтен! Спасибо за участие.');
                            break;
                        }
                    }
                }

                if (!productFound) {
                    console.error('Продукт не найден:', productId);
                }
            });
        });
    }

    // Функция для показа сообщения об успехе
    function showSuccessMessage(message) {
        const existingMessages = document.querySelectorAll('.success-message');
        existingMessages.forEach(msg => msg.remove());

        const messageElement = document.createElement('div');
        messageElement.className = 'success-message';
        messageElement.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #27ae60;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease;
            ">
                <i class="fas fa-check-circle"></i>
                ${message}
            </div>
        `;

        document.body.appendChild(messageElement);

        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }

    // Обработчик изменения размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const oldVisibleCards = visibleCards;
            updateVisibleCardsCount();

            if (oldVisibleCards !== visibleCards) {
                displayProducts();
            }
            
            updateScrollLine();
            updateScrollButtonsVisibility();
        }, 250);
    });

    // Обработчик скролла для обновления ползунка и кнопок
    productsContainer.addEventListener('scroll', () => {
        updateScrollLine();
        updateScrollButtonsVisibility();
    });

    // Инициализация при загрузке страницы
    initProductsData();
    displayProducts();
    createImageModal(); // Создаем модальное окно при загрузке

    // Функция для обновления данных
    window.refreshProducts = function () {
        initProductsData();
        displayProducts();
    };
});