function changeSlide() {
    var spanPrompts = document.querySelectorAll('.spanSlide');
    var input = document.getElementById('inputBtn');
    
    spanPrompts.forEach(function(spanPrompt) {
        var computedStyles = window.getComputedStyle(spanPrompt);
        var animationName = computedStyles.animationName;

        if (animationName === 'slide') {
            spanPrompt.style.animation = 'deslide 10s infinite linear';
            input.setAttribute('value', '⬅');
        } else if (animationName === 'deslide') {
            spanPrompt.style.animation = 'slide 10s infinite linear';
            input.setAttribute('value', '➡');
        }
    });
}
