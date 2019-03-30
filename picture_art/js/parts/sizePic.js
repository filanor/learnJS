// sizePic
function sizePic() {
    const sizes = document.querySelectorAll('.sizes-block');

    for (let i = 0; i < sizes.length; i++) {

        sizes[i].addEventListener('mouseover', function (e) {
            this.children[0].setAttribute('src', changeImg(this, e.type));
        });

        sizes[i].addEventListener('mouseout', function (e) {
            this.children[0].setAttribute('src', changeImg(this, e.type));
            for (let j = 1; j < this.childNodes.length; j++) {
                this.childNodes[j].style.display = "block";
            }
        });
    }

    function changeImg(element, event) {
        let src = element.children[0].getAttribute('src'),
            pos = src.indexOf('.png');
        if (event == "mouseover") {
            return src.slice(0, pos) + '-1' + src.slice(pos);
        }
        return src.slice(0, pos - 2) + src.slice(pos);
    }
}

module.exports = sizePic;