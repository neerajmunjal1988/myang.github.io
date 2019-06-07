    jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters"); 

    $.validator.setDefaults({
        submitHandler: function(form,event) {    
                                event.preventDefault();
                                
                         $.ajax({
                         url: "mail.php", 
                         type: "POST",             
                         data: new FormData(form),
                         mimeType:"multipart/form-data",
                         contentType: false,
                         cache: false,
                         processData:false,
                         dataType: 'json',
                         beforeSend: function(){$('#'+form.id).find("button[type='submit']").addClass('fa fa-spinner disabled');},  
                         complete:function(){$('#'+form.id).find("button[type='submit']").removeClass('fa fa-spinner disabled');},                           
                         success: function(data, textStatus, jqXHR) {
                                   

                            if(data.code == 1)
                            {
                              $(':input', '#'+form.id).not(':button, :submit, :reset, :hidden, :radio').val('').removeAttr('checked').removeAttr('selected');
                                      
                              window.location.href='thank-you.php';
                            }
                            else
                                $('#'+form.id).find("button[type='submit']").after('<p>'+data.msg+'</p>');

                         



                            

                         
                        },
                        error: function (jqXHR, exception) {
                              $("#msgModal1 p").html(exception);
                                $("#msgModal1").modal('show');
                
                        }
                        });
                
                
                     return false;
                },


                invalidHandler: function(form, validator) {

        if (!validator.numberOfInvalids())
            return;

        $('html, body').animate({
            scrollTop: $(validator.errorList[0].element).offset().top - 50
        }, 1000);

    }
    });

    $().ready(function() {       

        
        $("#myform1").validate({ focusInvalid: false,
            rules: {
                
                txtyname:
                {
                    required:true
                    
                },
                txtyemail: {
                    required: true,
                    email: true
                    
                },
                txtyphn: {
                    required: true,
                    digits:true,
                    minlength: 7,
                    maxlength: 12
                },
                txtycompany: {
                    required: true,
                    maxlength: 2000
                    
                }
                
            },
            messages: {
                
                txtyname: {
                    required: "Please enter your name"
                    
                    
                },
                txtyemail: {
                    required: "Please enter your email",
                    email: "Please enter a valid email"
                    
                },
                
                txtyphn: {
                    required: "Please enter your mobile no",
                    digits:"Please enter only digits",
                    minlength: "Please  enter the valid mobile number",
                    maxlength: "Please  enter the valid mobile number"
                    
                },
                txtycompany: {
                    required: "Please enter your company name",
                    
                }
                               
               
            }
        });

       
    });
    
