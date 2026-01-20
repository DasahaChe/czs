const productsArray = [
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
        "manufacturer": "ПАО 'Мясокомбинат'",
        "country": "Казахстан",
        "city": "Санкт-Петербург",
        "brand": "Горный",
        "category": "bakery",
        "productName": "Шоколад молочный с орехами",
        "description": "Отличный выбор для всей семьи, подходит для детей и взрослых. Насыщенный вкус и аромат, произведено на современном оборудовании.",
        "price": 199.99,
        "packaging": "Фольгированная упаковка",
        "weight": "100 г",
        "composition": "Какао-бобы высшего сорта, сахар тростниковый, молоко сухое цельное, орехи лесные обжаренные, лецитин соевый (эмульгатор), ванилин натуральный. Шоколад с высоким содержанием какао. Без искусственных добавок.",
        "website": "premiumfood.ru",
        "photo": {
            "fileName": "product_8.jpeg",
            "fileSize": 11876,
            "fileType": "image/jpeg",
            "lastModified": "24.04.2025, 08:55:42",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "ООО 'Хлебозавод №1'",
        "country": "Грузия",
        "city": "Новосибирск",
        "brand": "Лесной",
        "category": "bakery",
        "productName": "Печенье овсяное с изюмом",
        "description": "Насыщенный вкус и аромат, произведено на современном оборудовании. Без ГМО, без искусственных красителей и ароматизаторов.",
        "price": 89.00,
        "packaging": "Картонная коробка с целлофаном",
        "weight": "500 г",
        "composition": "Мука пшеничная высшего сорта, овсяные хлопья цельнозерновые, изюм сушеный, сахар коричневый, масло растительное подсолнечное, яйца куриные, разрыхлитель (пирофосфат натрия, сода пищевая), соль морская. Домашняя выпечка.",
        "website": "gorniy-product.ru",
        "photo": {
            "fileName": "product_9.jpeg",
            "fileSize": 8921,
            "fileType": "image/jpeg",
            "lastModified": "30.10.2025, 17:30:15",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "АО 'Рыбоперерабатывающий завод'",
        "country": "Россия",
        "city": "Казань",
        "brand": "Морской",
        "category": "bakery",
        "productName": "Хлеб бородинский на закваске",
        "description": "Без ГМО, без искусственных красителей и ароматизаторов. Натуральный продукт без искусственных добавок и консервантов.",
        "price": 45.00,
        "packaging": "Бумажный пакет",
        "weight": "750 г",
        "composition": "Мука ржаная обойная, вода очищенная, закваска ржаная, солод ржаной ферментированный, соль каменная, тмин, кориандр молотый. Выпекается по традиционному рецепту на опаре. Натуральный продукт.",
        "website": "lesnoy.ru",
        "photo": {
            "fileName": "product_10.jpeg",
            "fileSize": 7654,
            "fileType": "image/jpeg",
            "lastModified": "14.01.2025, 12:05:27",
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
        "manufacturer": "ПАО 'Мясокомбинат'",
        "country": "Казахстан",
        "city": "Санкт-Петербург",
        "brand": "Классика",
        "category": "meat",
        "productName": "Салями итальянская",
        "description": "Отличный выбор для всей семьи, подходит для детей и взрослых. Насыщенный вкус и аромат, произведено на современном оборудовании.",
        "price": 450.00,
        "packaging": "Вакуумная упаковка",
        "weight": "450 г",
        "composition": "Молоко пастеризованное высшего сорта, закваска мезофильных культур, ферментный препарат микробного происхождения, соль пищевая. Выдержка не менее 30 суток. Традиционный рецепт. Качественный продукт.",
        "website": "premiumfood.ru",
        "photo": {
            "fileName": "product_18.jpeg",
            "fileSize": 11345,
            "fileType": "image/jpeg",
            "lastModified": "29.09.2025, 15:30:24",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "ООО 'Хлебозавод №1'",
        "country": "Грузия",
        "city": "Нижний Новгород",
        "brand": "Горный",
        "category": "meat",
        "productName": "Бекон копченый",
        "description": "Насыщенный вкус и аромат, произведено на современном оборудовании. Без ГМО, без искусственных красителей и ароматизаторов.",
        "price": 380.00,
        "packaging": "Вакуумная упаковка",
        "weight": "500 г",
        "composition": "Сливки свежие, пахта, соль пищевая йодированная. Произведено методом сбивания. Содержание молочного жира не менее 82,5%. Без растительных жиров и эмульгаторов. Натуральный состав.",
        "website": "gorniy-product.ru",
        "photo": {
            "fileName": "product_19.jpeg",
            "fileSize": 8654,
            "fileType": "image/jpeg",
            "lastModified": "22.01.2025, 17:45:37",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "АО 'Рыбоперерабатывающий завод'",
        "country": "Россия",
        "city": "Екатеринбург",
        "brand": "Лесной",
        "category": "meat",
        "productName": "Ветчина в/с",
        "description": "Без ГМО, без искусственных красителей и ароматизаторов. Натуральный продукт без искусственных добавок и консервантов.",
        "price": 420.00,
        "packaging": "Вакуумная упаковка",
        "weight": "500 г",
        "composition": "Какао-бобы высшего сорта, сахар тростниковый, молоко сухое цельное, орехи лесные обжаренные, лецитин соевый (эмульгатор), ванилин натуральный. Шоколад с высоким содержанием какао. Без искусственных добавок.",
        "website": "lesnoy.ru",
        "photo": {
            "fileName": "product_20.jpeg",
            "fileSize": 10234,
            "fileType": "image/jpeg",
            "lastModified": "14.06.2025, 12:10:50",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "ООО 'Молпродукт'",
        "country": "Армения",
        "city": "Новосибирск",
        "brand": "Морской",
        "category": "fish",
        "productName": "Рыба горбуша соленая",
        "description": "Натуральный продукт без искусственных добавок и консервантов. Произведено из отборного сырья с соблюдением всех стандартов качества.",
        "price": 290.00,
        "packaging": "Заводская упаковка",
        "weight": "1 кг",
        "composition": "Мука пшеничная высшего сорта, овсяные хлопья цельнозерновые, изюм сушеный, сахар коричневый, масло растительное подсолнечное, яйца куриные, разрыхлитель (пирофосфат натрия, сода пищевая), соль морская. Домашняя выпечка.",
        "website": "rechnoy.su",
        "photo": {
            "fileName": "product_21.jpeg",
            "fileSize": 12567,
            "fileType": "image/jpeg",
            "lastModified": "08.10.2025, 18:25:43",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "ЗАО 'Пищевик'",
        "country": "Беларусь",
        "city": "Казань",
        "brand": "Речной",
        "category": "fish",
        "productName": "Крабовые палочки",
        "description": "Произведено из отборного сырья с соблюдением всех стандартов качества. Идеально подходит для здорового питания и диетического рациона.",
        "price": 180.00,
        "packaging": "Термоусадочная пленка",
        "weight": "250 г",
        "composition": "Мука ржаная обойная, вода очищенная, закваска ржаная, солод ржаной ферментированный, соль каменная, тмин, кориандр молотый. Выпекается по традиционному рецепту на опаре. Натуральный продукт.",
        "website": "moloko.ru",
        "photo": {
            "fileName": "product_22.jpeg",
            "fileSize": 8765,
            "fileType": "image/jpeg",
            "lastModified": "25.03.2025, 14:55:16",
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
    },
    {
        "manufacturer": "ПАО 'Мясокомбинат'",
        "country": "Казахстан",
        "city": "Казань",
        "brand": "Премиум",
        "category": "hygiene",
        "productName": "Зубная паста",
        "description": "Отличный выбор для всей семьи, подходит для детей и взрослых. Насыщенный вкус и аромат, произведено на современном оборудовании.",
        "price": 95.00,
        "packaging": "Пластиковый тюбик",
        "weight": "100 г",
        "composition": "Сливки нормализованные высшего сорта, закваска молочнокислых бактерий. Технология производства позволяет сохранить все полезные свойства продукта. Без стабилизаторов и загустителей. Натуральный продукт.",
        "website": "premiumfood.ru",
        "photo": {
            "fileName": "product_28.jpeg",
            "fileSize": 7345,
            "fileType": "image/jpeg",
            "lastModified": "19.09.2025, 11:55:57",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "ООО 'Хлебозавод №1'",
        "country": "Грузия",
        "city": "Москва",
        "brand": "Классика",
        "category": "hygiene",
        "productName": "Стиральный порошок",
        "description": "Насыщенный вкус и аромат, произведено на современном оборудовании. Без ГМО, без искусственных красителей и ароматизаторов.",
        "price": 350.00,
        "packaging": "Картонная коробка",
        "weight": "2 кг",
        "composition": "Творог зерненый, сливки пастеризованные, кальций карбонат, витамин D3 (холекальциферол). Высокое содержание белка при минимальном количестве жира. Подходит для спортивного питания. Произведено по ГОСТ.",
        "website": "gorniy-product.ru",
        "photo": {
            "fileName": "product_29.jpeg",
            "fileSize": 10432,
            "fileType": "image/jpeg",
            "lastModified": "06.04.2025, 17:40:10",
            "dataUrl": ""
        }
    },
    {
        "manufacturer": "АО 'Рыбоперерабатывающий завод'",
        "country": "Россия",
        "city": "Санкт-Петербург",
        "brand": "Горный",
        "category": "hygiene",
        "productName": "Средство для мытья посуды",
        "description": "Без ГМО, без искусственных красителей и ароматизаторов. Натуральный продукт без искусственных добавок и консервантов.",
        "price": 95.00,
        "packaging": "Пластиковая бутылка",
        "weight": "500 мл",
        "composition": "Молоко пастеризованное высшего сорта, закваска мезофильных культур, ферментный препарат микробного происхождения, соль пищевая. Выдержка не менее 30 суток. Традиционный рецепт. Качественный продукт.",
        "website": "lesnoy.ru",
        "photo": {
            "fileName": "product_30.jpeg",
            "fileSize": 8123,
            "fileType": "image/jpeg",
            "lastModified": "23.10.2025, 14:25:33",
            "dataUrl": ""
        }
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Элементы DOM
    const topPagination = document.getElementById('topPagination');
    const bottomPagination = document.getElementById('bottomPagination');
    const productsContainer = document.getElementById('productsContainer');
    const totalProductsCount = document.getElementById('totalProductsCount');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Конфигурация
    const CARDS_PER_PAGE = {
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 5
    };
    const MAX_CHARS = 100;
    let currentPage = 1;
    let allProducts = [];
    let visibleCards = 3;

    // Функция для получения данных
    function getProductsArray() {
        return productsArray;
    }

    // Инициализация данных продуктов
    function initProductsData() {
        const productsData = getProductsArray();

        // Восстанавливаем голоса из sessionStorage
        let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

        allProducts = productsData.map((product, index) => ({
            ...product,
            id: `product_${index + 1}`,
            hasVoted: userVotes[`product_${index + 1}`] || false,
            createdAt: new Date().toISOString()
        }));

        console.log(`Загружено ${allProducts.length} продуктов`);
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

        const totalProducts = allProducts.length;
        const maxPages = Math.ceil(totalProducts / visibleCards);

        if (currentPage > maxPages && maxPages > 0) {
            currentPage = maxPages;
        }
    }

    // Отображение карточек товаров
    function displayProducts() {
        const totalProducts = allProducts.length;
        totalProductsCount.textContent = totalProducts;

        if (totalProducts === 0) {
            productsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <h2>Продукты не найдены</h2>
                <p>Нет доступных продуктов для отображения</p>
            </div>
        `;
            topPagination.innerHTML = '';
            bottomPagination.innerHTML = '';
            return;
        }

        // Рассчитываем индексы для текущей страницы
        const startIndex = (currentPage - 1) * visibleCards;
        const endIndex = startIndex + visibleCards;
        const currentProducts = allProducts.slice(startIndex, endIndex);

        const totalPages = Math.ceil(totalProducts / visibleCards);

        // Отображаем пагинацию
        displayPagination(topPagination, totalProducts, totalPages);
        displayPagination(bottomPagination, totalProducts, totalPages);

        // Отображаем карточки товаров
        let productsHTML = '<div class="products-container">';

        currentProducts.forEach((product, index) => {
            const actualIndex = startIndex + index + 1; // +1 потому что индексы начинаются с 1 для пользователя

            productsHTML += `
                <div class="product-card" data-product-id="${product.id}" data-index="${startIndex + index}">
                    <div class="product-image">
                        <img src="${product.photo.dataUrl || 'img/defaultFoto.jpg'}" 
                             alt="${product.productName}" 
                             loading="lazy"
                             onerror="this.src='https://picsum.photos/400/300'">
                    </div>
                    
                    <div class="product-content">
                        <div class="product-header">                           
                            <div class="manufacturer">
                                <i class="fas fa-industry"></i> ${product.manufacturer}
                            </div>
                            <div class="city">
                                ${product.country} / ${product.city}
                            </div>
                        </div>
                        
                        <h3 class="product-name">${product.productName}</h3>  
                        
                        <!-- Описание (скрыто по умолчанию) -->
                        <div class="composition-section">
                            <div class="composition-title">
                               <div><i class="fas fa-file-alt"></i> Описание</div>
                               <button class="toggle-expand" data-type="description" data-product-id="${product.id}">
                                    <i class="fas fa-chevron-down"></i> Показать описание
                                </button>
                            </div>  
                            <div class="description-text" id="description-${product.id}" style="display: none;">
                                ${product.description || 'Описание отсутствует'}
                            </div>                         
                        </div>

                        <div class="price-section">
                         <div class="price-bage">Цена на полке</div>
                            <div class="price">${product.price.toFixed(2)} ₽
                               
                            </div>
                            <div class="weight">${product.weight}</div>
                        </div>
                        
                        <div class="details-grid">
                            <div class="detail-item">
                                <span class="detail-label">Бренд</span>
                                <span class="detail-value">${product.brand}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Фасовка / упаковка</span>
                                <span class="detail-value">${product.packaging}</span>
                            </div> 
                             <div class="detail-item">
                                <span class="detail-label">Категория</span>
                                <span class="detail-value">${product.category}</span>
                            </div>                            
                        </div>  
                        
                        <!-- Состав (скрыт по умолчанию) -->
                        <div class="composition-section">
                            <div class="composition-title">
                                <div><i class="fas fa-list-ul"></i> Состав</div>
                                <button class="toggle-expand" data-type="composition" data-product-id="${product.id}">
                                    <i class="fas fa-chevron-down"></i> Показать состав
                                </button>
                            </div>
                            <div class="composition-text" id="composition-${product.id}" style="display: none;">
                                ${product.composition || 'Состав отсутствует'}
                            </div>
                        </div>
                        
                        <div class="product-footer">
                            <div class="website">
                                <i class="fas fa-globe"></i> ${product.website}
                            </div>
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

        productsHTML += '</div>';
        productsContainer.innerHTML = productsHTML;

        // Восстанавливаем состояние развернутых блоков
        restoreExpandedState();
        
        // Добавляем обработчики событий
        addEventListeners();

        // Прокручиваем к началу контейнера
        const container = document.querySelector('.products-container');
        if (container) {
            container.scrollLeft = 0;
        }
    }

    // Функция для отображения пагинации с новым форматом
    function displayPagination(containerElement, totalProducts, totalPages) {
        if (totalProducts === 0) {
            containerElement.innerHTML = '';
            return;
        }

        const startProduct = (currentPage - 1) * visibleCards + 1;
        const endProduct = Math.min(currentPage * visibleCards, totalProducts);

        // НОВЫЙ ФОРМАТ: "Компания 1-6" вместо "Показано 1-5"
        let paginationHTML = `
        <div class="top-pagination">
            <div class="pagination-info">
                <strong>Компания ${startProduct}-${endProduct}</strong> из ${totalProducts}
                ${totalPages > 0 ? `(Страница ${currentPage} из ${totalPages})` : ''}
            </div>
            
            <div class="pagination-controls">
                <button class="pagination-btn" id="${containerElement.id === 'topPagination' ? 'prevPageTop' : 'prevPageBottom'}" 
                        ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i> Назад
                </button>
                
                <div class="pagination-numbers" id="${containerElement.id === 'topPagination' ? 'pageNumbersTop' : 'pageNumbersBottom'}">
                    <!-- Номера страниц будут добавлены здесь -->
                </div>
                
                <button class="pagination-btn" id="${containerElement.id === 'topPagination' ? 'nextPageTop' : 'nextPageBottom'}" 
                        ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}>
                    Вперед <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        `;

        containerElement.innerHTML = paginationHTML;

        // Добавляем номера страниц
        const pageNumbersContainer = document.getElementById(
            containerElement.id === 'topPagination' ? 'pageNumbersTop' : 'pageNumbersBottom'
        );

        let pageNumbersHTML = '';

        // Всегда показываем первую страницу
        if (totalPages >= 1) {
            pageNumbersHTML += `
            <div class="page-number ${currentPage === 1 ? 'active' : ''}" data-page="1">1</div>
            `;
        }

        // Показываем многоточие, если нужно
        if (currentPage > 3) {
            pageNumbersHTML += `<div class="page-number" style="cursor: default">...</div>`;
        }

        // Показываем страницы вокруг текущей
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            if (i === 1 || i === totalPages) continue;
            pageNumbersHTML += `
            <div class="page-number ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</div>
            `;
        }

        // Показываем многоточие, если нужно
        if (currentPage < totalPages - 2 && totalPages > 1) {
            pageNumbersHTML += `<div class="page-number" style="cursor: default">...</div>`;
        }

        // Всегда показываем последнюю страницу, если есть больше одной страницы
        if (totalPages > 1) {
            pageNumbersHTML += `
            <div class="page-number ${currentPage === totalPages ? 'active' : ''}" data-page="${totalPages}">${totalPages}</div>
            `;
        }

        pageNumbersContainer.innerHTML = pageNumbersHTML;

        // Добавляем обработчики для пагинации
        const prevBtn = document.getElementById(
            containerElement.id === 'topPagination' ? 'prevPageTop' : 'prevPageBottom'
        );
        const nextBtn = document.getElementById(
            containerElement.id === 'topPagination' ? 'nextPageTop' : 'nextPageBottom'
        );

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    goToPage(currentPage - 1);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    goToPage(currentPage + 1);
                }
            });
        }

        const pageNumbers = pageNumbersContainer.querySelectorAll('.page-number[data-page]');
        pageNumbers.forEach(number => {
            number.addEventListener('click', function () {
                const page = parseInt(this.getAttribute('data-page'));
                goToPage(page);
            });
        });
    }

    // Функция для перехода на указанную страницу
    function goToPage(page) {
        const totalProducts = allProducts.length;
        const totalPages = Math.ceil(totalProducts / visibleCards);

        if (page < 1 || page > totalPages) {
            return;
        }

        currentPage = page;
        displayProducts();
        
        // Прокручиваем к верху страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Восстановление состояния развернутых блоков
    function restoreExpandedState() {
        const expandedState = JSON.parse(sessionStorage.getItem('expandedState') || '{}');
        
        Object.keys(expandedState).forEach(key => {
            const [type, productId] = key.split('-');
            const element = document.getElementById(`${type}-${productId}`);
            const button = document.querySelector(`button[data-product-id="${productId}"][data-type="${type}"]`);
            
            if (element && button && expandedState[key]) {
                const product = allProducts.find(p => p.id === productId);
                if (product) {
                    // Показываем элемент
                    element.style.display = 'block';
                    element.textContent = type === 'composition' ? product.composition : product.description;
                    const icon = button.querySelector('i');
                    if (icon) icon.className = 'fas fa-chevron-up';
                    button.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть ' + (type === 'composition' ? 'состав' : 'описание');
                }
            }
        });
    }

    // Сохранение состояния развернутых блоков
    function saveExpandedState(productId, type, isExpanded) {
        let expandedState = JSON.parse(sessionStorage.getItem('expandedState') || '{}');
        expandedState[`${type}-${productId}`] = isExpanded;
        sessionStorage.setItem('expandedState', JSON.stringify(expandedState));
    }

    // Функция для добавления обработчиков событий
    function addEventListeners() {
        // Обработчики для кнопок показа/скрытия описания и состава
        const toggleButtons = document.querySelectorAll('.toggle-expand');
        toggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');
                const type = this.getAttribute('data-type'); // 'description' или 'composition'
                const element = document.getElementById(`${type}-${productId}`);
                const product = allProducts.find(p => p.id === productId);

                if (!product || !element) return;

                if (element.style.display === 'block' || element.style.display === '') {
                    // Скрываем текст
                    element.style.display = 'none';
                    this.innerHTML = '<i class="fas fa-chevron-down"></i> Показать ' + (type === 'composition' ? 'состав' : 'описание');
                    saveExpandedState(productId, type, false);
                } else {
                    // Показываем текст
                    element.style.display = 'block';
                    element.textContent = type === 'composition' ? product.composition : product.description;
                    this.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть ' + (type === 'composition' ? 'состав' : 'описание');
                    saveExpandedState(productId, type, true);
                }
            });
        });

        // Обработчики для кнопок голосования
        const voteButtons = document.querySelectorAll('.vote-btn');
        voteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-product-id');

                // Находим продукт
                const productIndex = allProducts.findIndex(p => p.id === productId);
                if (productIndex === -1) return;

                // Получаем текущие голоса пользователя из sessionStorage
                let userVotes = JSON.parse(sessionStorage.getItem('userVotes') || '{}');

                // Проверяем, не голосовал ли пользователь уже
                if (userVotes[productId]) {
                    alert('Вы уже отдали голос за этот товар!');
                    return;
                }

                // Обновляем статус голосования
                allProducts[productIndex].hasVoted = true;

                // Сохраняем голос пользователя в sessionStorage
                userVotes[productId] = true;
                sessionStorage.setItem('userVotes', JSON.stringify(userVotes));

                // Обновляем отображение
                this.classList.add('voted');
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Голос отдан';
                this.disabled = true;

                // Показываем сообщение об успехе
                showSuccessMessage('Ваш голос учтен! Спасибо за участие.');
            });
        });

        // Обработчики для стрелок прокрутки
        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                const container = document.querySelector('.products-container');
                if (container) {
                    container.scrollBy({
                        left: -350,
                        behavior: 'smooth'
                    });
                }
            });

            scrollRightBtn.addEventListener('click', () => {
                const container = document.querySelector('.products-container');
                if (container) {
                    container.scrollBy({
                        left: 350,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    // Функция для показа сообщения об успехе
    function showSuccessMessage(message) {
        // Удаляем предыдущие сообщения
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
                const totalProducts = allProducts.length;
                const totalPages = Math.ceil(totalProducts / visibleCards);

                if (currentPage > totalPages && totalPages > 0) {
                    currentPage = totalPages;
                }

                displayProducts();
            }
        }, 250);
    });

    // Инициализация при загрузке страницы
    initProductsData();
    displayProducts();

    // Функция для обновления данных (может быть вызвана извне)
    window.refreshProducts = function () {
        initProductsData();
        displayProducts();
    };
});