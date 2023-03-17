$(document).ready(function(){
        
    $('#carrossel').slick({
        prevArrow: false,
        nextArrow: false,
        dots: false,
        autoplay: true,
        speed: 300,
        centerMode: true,
        variableWidth: true
    });
    $('.options').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            veiculo:{
                required: true
            },
        },
        messages:{
            nome: 'Digite seu nome completo'
        },
        submitHandler: function(form){
            alert('ok');
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Há ${camposIncorretos} campos incorretos !`)
            }
        }
    })
    $('.produtos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})