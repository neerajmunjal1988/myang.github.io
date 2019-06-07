    jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Only alphabetical characters"); 

    jQuery.validator.addMethod('filesize', function (value, element, arg) {
            var minsize=1000; // min 1kb

            if((element.files[0].size>minsize)&&(element.files[0].size<=arg)){
                return true;
            }else{
                return false;
            }
        });

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
                                window.location.href="thanks.php";
                              
                            }
                            else if(data.code == 3)
                            {

                              $(':input', '#'+form.id).not(':button, :submit, :reset, :hidden, :radio').val('').removeAttr('checked').removeAttr('selected');
                                window.location.href="thanks-you.php";
                              
                            }
                            else
                            {
                                $('#'+form.id).find("button[type='submit']").after('<p>'+data.msg+'</p>');       
                                setTimeout(function(){ $('#'+form.id).find("button[type='submit']").next('p').hide('slow');  },20000);
                            }

                         



                            

                         
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

        
        $("#upload_re").validate({ focusInvalid: false,
            rules: {
                txtname:
                {
                    required:true
                    
                },

                txtfname:
                {
                    required:true
                    
                },
                txtlname:
                {
                    required:true
                    
                },
                
                txtemail: {
                    required: true,
                    email: true
                    
                },
                txtphn: {
                    required: true,
                    digits:true,
                    minlength: 10,
                    maxlength: 10
                },
                'input-file-preview': {
                    required: true,
                     accept: "application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                     filesize: 1000000   //max size 200 kb
                    
                },
                txtmsg:
                {
                    required:true
                    
                }
                
            },
            messages: {
                
                txtname: {
                    required: "Please enter your name"
                    
                    
                },
                txtemail: {
                    required: "Please enter your email",
                    email: "Please enter a valid email"
                    
                },
                
                txtphn: {
                    required: "Please enter your mobile no",
                    digits:"Please enter only digits",
                    minlength: "Please  enter the valid mobile number",
                    maxlength: "Please  enter the valid mobile number"
                    
                },
                'input-file-preview': {
                    filesize:" file size must be less than 1 MB.",
                    required: "Please  upload only pdf or doc file.",
                     accept: "Please  upload only pdf or doc file format"
                    
                }
                               
               
            }
        });

       
    });
    
