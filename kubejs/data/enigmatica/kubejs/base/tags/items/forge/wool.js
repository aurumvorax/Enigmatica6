events.listen('item.tags', function (event) {
    for (var i = 0; i < colors.length; i++) {
        event.get('forge:wool').add('minecraft:' + colors[i] + '_wool');
    }
});
