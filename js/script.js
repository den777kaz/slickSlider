class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3
    
        }){

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
            infinity
        }
       
    }
    init(){
        console.log(this.slides)
        this.addGloClass();

        if(this.prev && this.next){
            this.controlSlider();
        }else {
            this.addArrows();
            this.controlSlider();
        }
    }
    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (let item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    this.addStyle();
    }

    addStyle (){
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
        .glo-slider {
            overflow: hidden;
        }
        .glo-slider__wrap {
            display: flex;
            transition: transform 0.5s;
            will-change: transform;
        }
        .glo-slider__item {
            flex: 0 0 ${this.options.widthSlide}%;
            margin: auto 0 !important;
        }
        `;
        document.head.appendChild(style);
    }

    controlSlider(){
        this.prev.addEventListener('click',this.prevSlider.bind(this));
        this.next.addEventListener('click',this.nextSlider.bind(this));
    }
    prevSlider(){

        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            if(this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }
    nextSlider(){
        if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {

            ++this.options.position;
                //infinity
            if(this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;

        }
        
    }
    addArrows () {

    }

} 