document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase(); // Получаем введенное значение и переводим в нижний регистр
    const recipes = [
        { name: 'Борщ', link: 'borch.html' },
        { name: 'Оливье', link: 'recipe1.html' },
        { name: 'Медовик', link: 'medovik.html' },
        { name: 'Кулебяка с грибами', link: 'kulebyaka.html' },
        { name: 'Паста Карбонара', link: 'carbonara.html' },
        { name: 'Брускетта', link: 'bruschetta.html' },
        { name: 'Панна Котта', link: 'panna_cotta.html' },
        { name: 'Рамен', link: 'ramen.html' },
        { name: 'Нигири', link: 'nigiri.html' },
        { name: 'Моти', link: 'moti.html' },
        { name: 'Чашушули', link: 'test 2.html' },
        { name: 'Пхали', link: 'phali.html' },
        { name: 'Гозинаки', link: 'gozinaki.html' },
        { name: 'Хачапури', link: 'hachapuri.html' },
        { name: 'Рататуй', link: 'ratatouille.html' },
        { name: 'Тартар', link: 'tartar.html' },
        { name: 'Клафути', link: 'clafoutis.html' },
        { name: 'Киш', link: 'quiche.html' }
    ];

    // Находим рецепт в массиве
    const foundRecipe = recipes.find(recipe => recipe.name.toLowerCase() === searchTerm);

    if (foundRecipe) {
        // Если рецепт найден, перенаправляем на страницу
        window.location.href = foundRecipe.link;
    } else {
        // Если не найден, показываем сообщение
        alert('Рецепт не найден. Пожалуйста, попробуйте снова.');
    }
});

