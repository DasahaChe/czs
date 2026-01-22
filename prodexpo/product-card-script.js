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
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Конфигурация
    const MAX_WORDS = 3;
    const CARDS_PER_PAGE = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 5
    };

    let currentCompanyIndex = 0;
    let companiesArray = [];
    let visibleCards = 3;
    let scrollLeftHandler = null;
    let scrollRightHandler = null;
    let modalOverlay = null;
    let modalImage = null;
    let modalCloseBtn = null;
    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let thumbStartX = 0;

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
        
        // После обновления количества карточек нужно пересчитать скролл
        setTimeout(updateScrollLine, 100);
    }

    // Функция для подсчета общего количества товаров
    function countTotalProducts() {
        return companiesArray.reduce((total, company) => {
            return total + (company.products ? company.products.length : 0);
        }, 0);
    }

    // Функция для сокращения текста по словам
    function truncateTextByWords(text, maxWords) {
        if (!text || text.trim() === '') return 'Нет данных';

        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;

        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    }

    // Отображение карточек товаров текущей компании
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

                // Создаем сокращенные версии текстов
                const shortDescription = truncateTextByWords(product.description, MAX_WORDS);
                const shortComposition = truncateTextByWords(product.composition, MAX_WORDS);

                productsHTML += `
                    <div class="product-card" data-product-id="${product.id}" data-index="${index}">
                        <div class="product-image">
                            <img src="${product.photo?.dataUrl || 'img/defaultFoto.jpg'}" 
                                 alt="${product.productName}" 
                                 loading="lazy"
                                 onerror="this.src='https://picsum.photos/400/300'">
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

        // Показываем или скрываем скролл-линию
        if (scrollLineContainer) {
            if (totalProductsInCompany > visibleCards) {
                scrollLineContainer.style.display = 'block';
                setTimeout(updateScrollLine, 100);
            } else {
                scrollLineContainer.style.display = 'none';
            }
        }

        // Инициализируем стрелки прокрутки компаний
        initScrollArrows();

        // Добавляем обработчики событий
        addEventListeners();
        
        // Инициализируем скролл
        initHorizontalScroll();
    }

    // Инициализация горизонтального скролла
    function initHorizontalScroll() {
        if (!productsContainer) return;
        
        // Очищаем старые обработчики
        productsContainer.removeEventListener('mousedown', startDrag);
        productsContainer.removeEventListener('touchstart', startDragTouch);
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', dragTouch);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
        
        if (scrollLineThumb) {
            scrollLineThumb.removeEventListener('mousedown', startThumbDrag);
            document.removeEventListener('mousemove', dragThumb);
            document.removeEventListener('mouseup', endThumbDrag);
        }
        
        // Добавляем обработчики для drag скролла контейнера
        productsContainer.addEventListener('mousedown', startDrag);
        productsContainer.addEventListener('touchstart', startDragTouch, { passive: false });
        
        // Добавляем обработчики для скролл-ползунка
        if (scrollLineThumb) {
            scrollLineThumb.addEventListener('mousedown', startThumbDrag);
        }
        
        // Добавляем обработчики колеса мыши для горизонтального скролла
        productsContainer.addEventListener('wheel', handleWheelScroll, { passive: false });
        
        // Обновляем позицию ползунка
        updateScrollLine();
    }

    function startDrag(e) {
        isDragging = true;
        productsContainer.classList.add('grabbing');
        startX = e.pageX - productsContainer.offsetLeft;
        scrollLeftStart = productsContainer.scrollLeft;
        
        e.preventDefault();
    }

    function startDragTouch(e) {
        if (e.touches.length === 1) {
            isDragging = true;
            productsContainer.classList.add('grabbing');
            startX = e.touches[0].pageX - productsContainer.offsetLeft;
            scrollLeftStart = productsContainer.scrollLeft;
            
            e.preventDefault();
        }
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 1.5; // Умножаем для более плавного скролла
        productsContainer.scrollLeft = scrollLeftStart - walk;
        
        updateScrollLine();
    }

    function dragTouch(e) {
        if (!isDragging || e.touches.length !== 1) return;
        e.preventDefault();
        const x = e.touches[0].pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        productsContainer.scrollLeft = scrollLeftStart - walk;
        
        updateScrollLine();
    }

    function endDrag() {
        isDragging = false;
        productsContainer.classList.remove('grabbing');
    }

    function startThumbDrag(e) {
        isDragging = true;
        thumbStartX = e.clientX;
        scrollLeftStart = productsContainer.scrollLeft;
        
        e.preventDefault();
    }

    function dragThumb(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - thumbStartX;
        const trackWidth = scrollLineContainer.offsetWidth;
        const thumbWidth = scrollLineThumb.offsetWidth;
        const maxThumbPosition = trackWidth - thumbWidth;
        
        let newThumbPosition = (scrollLineThumb.offsetLeft + deltaX);
        newThumbPosition = Math.max(0, Math.min(newThumbPosition, maxThumbPosition));
        
        // Обновляем позицию ползунка
        scrollLineThumb.style.left = newThumbPosition + 'px';
        
        // Обновляем скролл контейнера
        const scrollRatio = newThumbPosition / maxThumbPosition;
        const maxScroll = productsContainer.scrollWidth - productsContainer.clientWidth;
        productsContainer.scrollLeft = scrollRatio * maxScroll;
        
        thumbStartX = e.clientX;
    }

    function endThumbDrag() {
        isDragging = false;
    }

    function handleWheelScroll(e) {
        // Если есть горизонтальный скролл, используем колесо мыши для него
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
            e.preventDefault();
            productsContainer.scrollLeft += e.deltaY;
            updateScrollLine();
        }
    }

    function updateScrollLine() {
        if (!scrollLineThumb || !productsContainer || !scrollLineContainer) return;
        
        const containerWidth = productsContainer.clientWidth;
        const scrollWidth = productsContainer.scrollWidth;
        const scrollLeft = productsContainer.scrollLeft;
        const maxScroll = scrollWidth - containerWidth;
        
        if (maxScroll <= 0) {
            scrollLineThumb.style.width = '100%';
            scrollLineThumb.style.left = '0';
            return;
        }
        
        // Вычисляем ширину ползунка (пропорционально видимой области)
        const thumbWidth = Math.max(60, (containerWidth / scrollWidth) * scrollLineContainer.offsetWidth);
        scrollLineThumb.style.width = thumbWidth + 'px';
        
        // Вычисляем позицию ползунка
        const trackWidth = scrollLineContainer.offsetWidth;
        const maxThumbPosition = trackWidth - thumbWidth;
        const thumbPosition = (scrollLeft / maxScroll) * maxThumbPosition;
        
        scrollLineThumb.style.left = thumbPosition + 'px';
    }

    // Инициализация стрелок прокрутки компаний
    function initScrollArrows() {
        // Удаляем старые обработчики если они есть
        if (scrollLeftBtn && scrollLeftHandler) {
            scrollLeftBtn.removeEventListener('click', scrollLeftHandler);
        }
        if (scrollRightBtn && scrollRightHandler) {
            scrollRightBtn.removeEventListener('click', scrollRightHandler);
        }

        // Создаем новые обработчики
        scrollLeftHandler = () => {
            if (currentCompanyIndex > 0) {
                goToCompany(currentCompanyIndex - 1);
            }
        };

        scrollRightHandler = () => {
            if (currentCompanyIndex < companiesArray.length - 1) {
                goToCompany(currentCompanyIndex + 1);
            }
        };

        // Добавляем обработчики
        if (scrollLeftBtn) {
            scrollLeftBtn.addEventListener('click', scrollLeftHandler);
        }
        if (scrollRightBtn) {
            scrollRightBtn.addEventListener('click', scrollRightHandler);
        }

        // Обновляем состояние стрелок
        updateScrollArrowsState();
    }

    // Обновление состояния стрелок
    function updateScrollArrowsState() {
        if (scrollLeftBtn) {
            scrollLeftBtn.style.opacity = currentCompanyIndex === 0 ? '0.5' : '1';
            scrollLeftBtn.style.cursor = currentCompanyIndex === 0 ? 'not-allowed' : 'pointer';
        }
        if (scrollRightBtn) {
            scrollRightBtn.style.opacity = currentCompanyIndex === companiesArray.length - 1 ? '0.5' : '1';
            scrollRightBtn.style.cursor = currentCompanyIndex === companiesArray.length - 1 ? 'not-allowed' : 'pointer';
        }
    }

    // Функция для отображения пагинации
    function displayPagination(containerElement, currentCompany, displayedProducts, totalCompanies, totalProductsInCompany) {
        if (!containerElement || totalCompanies === 0) {
            if (containerElement) containerElement.innerHTML = '';
            return;
        }

        const currentCompanyNumber = currentCompanyIndex + 1;

        let paginationHTML = `
        <div class="top-pagination">
        <div class="company-info">
         <div class="companyKP">Посмотреть презентацию компании</div>
            <div class="pagination-info">
                <strong>${currentCompany.name}</strong>
                <div class="pagination-subinfo">
                    Компания ${currentCompanyNumber} из ${totalCompanies}
                </div>
            </div>
        </div>   
            <div class="pagination-controls">
                <button class="pagination-btn" id="${containerElement.id === 'topPagination' ? 'prevCompanyTop' : 'prevCompanyBottom'}" 
                        ${currentCompanyIndex === 0 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="pagination-numbers" id="${containerElement.id === 'topPagination' ? 'companyNumbersTop' : 'companyNumbersBottom'}">
                    <!-- Номера компаний будут добавлены здесь -->
                </div>
                
                <button class="pagination-btn" id="${containerElement.id === 'topPagination' ? 'nextCompanyTop' : 'nextCompanyBottom'}" 
                        ${currentCompanyIndex === totalCompanies - 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        `;

        containerElement.innerHTML = paginationHTML;

        const companyNumbersContainer = document.getElementById(
            containerElement.id === 'topPagination' ? 'companyNumbersTop' : 'companyNumbersBottom'
        );

        if (companyNumbersContainer) {
            let companyNumbersHTML = '';

            for (let i = 0; i < totalCompanies; i++) {
                companyNumbersHTML += `
                <div class="page-number ${currentCompanyIndex === i ? 'active' : ''}" 
                     data-company="${i}">${i + 1}</div>
                `;
            }

            companyNumbersContainer.innerHTML = companyNumbersHTML;

            const companyNumbers = companyNumbersContainer.querySelectorAll('.page-number[data-company]');
            companyNumbers.forEach(number => {
                number.addEventListener('click', function () {
                    const companyIndex = parseInt(this.getAttribute('data-company'));
                    goToCompany(companyIndex);
                });
            });
        }

        const prevBtnId = containerElement.id === 'topPagination' ? 'prevCompanyTop' : 'prevCompanyBottom';
        const nextBtnId = containerElement.id === 'topPagination' ? 'nextCompanyTop' : 'nextCompanyBottom';

        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentCompanyIndex > 0) {
                    goToCompany(currentCompanyIndex - 1);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentCompanyIndex < totalCompanies - 1) {
                    goToCompany(currentCompanyIndex + 1);
                }
            });
        }
    }

    // Функция для перехода к указанной компании
    function goToCompany(companyIndex) {
        if (companyIndex < 0 || companyIndex >= companiesArray.length) {
            return;
        }

        currentCompanyIndex = companyIndex;
        displayProducts();

        // Сбрасываем скролл к началу
        productsContainer.scrollLeft = 0;
        updateScrollLine();
    }

    // Функция для добавления обработчиков событий
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

                // Скрываем весь блок с сокращенным текстом
                sectionTitle.style.display = 'none';
                // Показываем полный текст
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

                // Скрываем полный текст
                fullElement.style.display = 'none';
                // Показываем блок с сокращенным текстом
                sectionTitle.style.display = 'block';
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
        }, 250);
    });

    // Обработчик скролла для обновления ползунка
    productsContainer.addEventListener('scroll', updateScrollLine);

    // Создаем модальное окно для изображений
    function createImageModal() {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'image-modal-overlay';
        modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2000;
        display: none;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
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
    `;

        modalCloseBtn = document.createElement('button');
        modalCloseBtn.className = 'modal-close-btn';
        modalCloseBtn.innerHTML = '×';
        modalCloseBtn.style.cssText = `
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

        modalCloseBtn.addEventListener('mouseenter', () => {
            modalCloseBtn.style.transform = 'scale(1.1)';
            modalCloseBtn.style.background = '#ff4444';
            modalCloseBtn.style.color = '#fff';
        });

        modalCloseBtn.addEventListener('mouseleave', () => {
            modalCloseBtn.style.transform = 'scale(1)';
            modalCloseBtn.style.background = '#fff';
            modalCloseBtn.style.color = '#333';
        });

        modalOverlay.appendChild(modalImage);
        modalOverlay.appendChild(modalCloseBtn);
        document.body.appendChild(modalOverlay);

        // Закрытие по клику на оверлей
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeImageModal();
            }
        });

        // Закрытие по кнопке
        modalCloseBtn.addEventListener('click', closeImageModal);

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
        modalImage.alt = altText;

        // Сбрасываем стили
        modalImage.style.maxWidth = '';
        modalImage.style.maxHeight = '';
        modalImage.style.width = '';
        modalImage.style.height = '';

        // Показываем модальное окно
        modalOverlay.style.display = 'flex';
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
            
            // Всегда устанавливаем 80% от экрана
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            
            modalImage.style.width = (screenWidth * 0.8) + 'px';
            modalImage.style.height = (screenHeight * 0.8) + 'px';
            modalImage.style.maxWidth = 'none';
            modalImage.style.maxHeight = 'none';
            modalImage.style.objectFit = 'contain';
            modalImage.style.transform = 'scale(1)';
            
            // Загружаем оригинал для проверки
            const tempImg = new Image();
            tempImg.src = imageSrc;
            
            tempImg.onload = function() {
                const originalWidth = tempImg.naturalWidth;
                const originalHeight = tempImg.naturalHeight;
                const aspectRatio = originalWidth / originalHeight;
                
                // Пересчитываем с сохранением пропорций
                let targetWidth = screenWidth * 0.8;
                let targetHeight = targetWidth / aspectRatio;
                
                if (targetHeight > screenHeight * 0.8) {
                    targetHeight = screenHeight * 0.8;
                    targetWidth = targetHeight * aspectRatio;
                }
                
                modalImage.style.width = targetWidth + 'px';
                modalImage.style.height = targetHeight + 'px';
            };
            
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

    // В функции addEventListeners() добавьте обработчики для изображений
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

                // Скрываем весь блок с сокращенным текстом
                sectionTitle.style.display = 'none';
                // Показываем полный текст
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

                // Скрываем полный текст
                fullElement.style.display = 'none';
                // Показываем блок с сокращенным текстом
                sectionTitle.style.display = 'block';
            });
        });

        // Обработчики для изображений товаров (увеличение по клику)
        document.querySelectorAll('.product-image img').forEach(img => {
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

    // Инициализация при загрузке страницы
    initProductsData();
    displayProducts();
    createImageModal();

    // Функция для обновления данных
    window.refreshProducts = function () {
        initProductsData();
        displayProducts();
    };
});