app.controller("crudCtrl", function ($scope, crudService) {

    //Variables
    $scope.divJobSeeker = false;
    $scope.opcoes = [1, 2, 3, 4, 5];
    $scope.TipoConta = [{ "Tipo": "Corrente" }, { "Tipo": "Poupança" }];
    $scope.TipoHora = [{ "Tipo": "Até 4 horas/dia" }, { "Tipo": "De 4 á 6 horas/dia" }, { "Tipo": "De 6 á 8 horas/dia" }, { "Tipo": "Acima 8 horas/dia" }, { "Tipo": "Finais de Semana" }];
    $scope.TipoHorario = [{ "Tipo": "(08:00 - 12:00)" }, { "Tipo": "(13:00 - 18:00)" }, { "Tipo": "(19:00 - 22:00)" }, { "Tipo": "(22:00 - acima)" }, { "Tipo": "(08:00 - 18:00)" }];
    $scope.schedules = [];
    $scope.Hours = [];
    $scope.Accounts = [];
   
    
    //Get All JobSeekers
    getAllJobSeekers();

    //Get All JobSeekers
    function getAllJobSeekers() {

        
        var jobseekersData = crudService.GetAllJobSeekers();

        jobseekersData.then(function (jobseeker) {

            $scope.jobseekers = jobseeker.data;

        }, function () {
            toastr["error"]("Erro ao obter os candidatos", "EasyCrud");
        });

    }

   
    //Function Get Schedule option
    $scope.GetSchedule = function(schedule_available)
    {
       
        var index = $scope.schedules.indexOf(schedule_available);

        if (index > -1)
            $scope.schedules.splice(index, 1);
            
        else
            $scope.schedules.push(schedule_available);        

    }


    //Function Get Hours
    $scope.GetHours = function (hours_available) {

        var index = $scope.Hours.indexOf(hours_available);

        if (index > -1)
            $scope.Hours.splice(index, 1);
            
        else
            $scope.Hours.push(hours_available);
        
    }

    //Function Get Account Type
    $scope.GetAccountType = function (account_type) {

        
        console.log(account_type);
        var index = $scope.Accounts.indexOf(account_type);

        if (index > -1)
            $scope.Accounts.splice(index, 1);
           
        else
            $scope.Accounts.push(account_type);
        
    }

    //Function Get Knowledges
    $scope.Knowledges = [];
    $scope.GetKnowledge = function (type,knowledge) {
        
        console.log(knowledge);
        var index = $scope.Knowledges.indexOf(knowledge);
        $scope.Knowledges[type] = knowledge;      

    }



    

    //Get JobSeeker per Id
    $scope.getJobSeekerPerId = function(jobseeker) {

       var jobseekerData = crudService.GetJobSeekerPerId(jobseeker.Id);

        jobseekerData.then(function (_jobseeker) {
            $scope.jobseeker = _jobseeker.data;
            $scope.jobseekerId = jobseeker.Id;
            $scope.Email = jobseeker.Email;
            $scope.Name = jobseeker.Name;
            $scope.Skype = jobseeker.Skype;
            $scope.Phone = jobseeker.Phone;
            $scope.Linkedin = jobseeker.Linkedin;
            $scope.City = jobseeker.City;
            $scope.State = jobseeker.State;
            $scope.Portifolio = jobseeker.Portifolio;
            $scope.HoursAvailable = jobseeker.HoursAvailable;
            $scope.ScheduleAvailable = jobseeker.ScheduleAvailable;
            $scope.WorkingTimeValue = jobseeker.WorkingTimeValue;
            $scope.Cpf = jobseeker.Cpf;
            $scope.Bank = jobseeker.Bank;
            $scope.Agency = jobseeker.Agency;
            $scope.AccountType = jobseeker.AccountType;
            $scope.AccountNumber = jobseeker.AccountNumber;
            $scope.NivelIonic = jobseeker.NivelIonic;
            $scope.NivelAndroid = jobseeker.NivelAndroid;
            $scope.NivelIos = jobseeker.NivelIos;
            $scope.NivelHtml = jobseeker.NivelHtml;
            $scope.NivelCss = jobseeker.NivelCss;
            $scope.NivelBootstrap = jobseeker.NivelBootstrap;
            $scope.NivelJquery = jobseeker.NivelJquery;
            $scope.NivelAngularJs = jobseeker.NivelAngularJs;
            $scope.NivelJava = jobseeker.NivelJava;
            $scope.NivelAspNetMvc = jobseeker.NivelAspNetMvc;
            $scope.NivelC = jobseeker.NivelC;
            $scope.NivelCPlus = jobseeker.NivelCPlus;
            $scope.NivelCake = jobseeker.NivelCake;
            $scope.NivelDjango = jobseeker.NivelDjango;
            $scope.NivelMajento = jobseeker.NivelMajento;
            $scope.NivelPhp = jobseeker.NivelPhp;
            $scope.NivelWordpress = jobseeker.NivelWordpress;
            $scope.NivelPhyton = jobseeker.NivelPhyton;
            $scope.NivelRuby = jobseeker.NivelRuby;
            $scope.NivelMySql = jobseeker.NivelMySql;
            $scope.NivelSqlServer = jobseeker.NivelSqlServer;
            $scope.NivelSalesforce = jobseeker.NivelSalesforce;
            $scope.NivelPhotoshop = jobseeker.NivelPhotoshop;
            $scope.NivelIllustrator = jobseeker.NivelIllustrator;
            $scope.NivelSeo = jobseeker.NivelSeo;
            $scope.ConhecimentoLinguagens = jobseeker.ConhecimentoLinguagens;

            $scope.Action = "Atualizar";
            $scope.divJobSeeker = true;
        }, function () {
            toastr["error"]("Erro ao obter job seeker por id!", "CRUDEasy");
        });
    }

    //Delete job seeker
    $scope.deleteJobSeeker = function (jobseeker) {

        var jobseekerData = crudService.DeleteJobSeeker(jobseeker.Id);

        jobseekerData.then(function (data) {

            if (data.status == 200) {

                toastr["success"]("Candidato excluído com sucesso!", "CRUDEasy");
            }
            getAllJobSeekers();
        },
          function () {
             toastr["error"]("Erro ao excluir", "CRUDEasy");

           });

    }

    //Insert JobSeeker
    $scope.insertUpdateJobSeeker = function() {
        
        var jobseeker = {
            
            Email: $scope.Email,
            Name: $scope.Name,
            Skype: $scope.Skype,
            Phone:$scope.Phone,
            Linkedin: $scope.Linkedin,
            City: $scope.City,
            State: $scope.State,
            Portifolio: $scope.Portifolio,
            HoursAvailable: $scope.Hours[0],
            ScheduleAvailable: $scope.schedules[0],
            WorkingTimeValue: $scope.WorkingTimeValue,
            Cpf: $scope.Cpf,
            Bank: $scope.Bank,
            Agency: $scope.Agency,
            AccountType: $scope.Accounts[0],
            AccountNumber: $scope.AccountNumber,
            NivelIonic: $scope.Knowledges["ionic"],
            NivelAndroid: $scope.Knowledges["android"],
            NivelIos: $scope.Knowledges["ios"],
            NivelHtml: $scope.Knowledges["html"],
            NivelCss: $scope.Knowledges["css"],
            NivelBootstrap: $scope.Knowledges["bootstrap"],
            NivelJquery: $scope.Knowledges["jquery"],
            NivelAngularJs: $scope.Knowledges["angularjs"],
            NivelJava: $scope.Knowledges["java"],
            NivelAspNetMvc: $scope.Knowledges["asp"],
            NivelC: $scope.Knowledges["code_c"],
            NivelCPlus: $scope.Knowledges["cplus"],
            NivelCake: $scope.Knowledges["cake"],
            NivelDjango: $scope.Knowledges["django"],
            NivelMajento: $scope.Knowledges["majento"],
            NivelPhp: $scope.Knowledges["php"],
            NivelWordpress: $scope.Knowledges["wordpress"],
            NivelPhyton: $scope.Knowledges["phyton"],
            NivelRuby: $scope.Knowledges["ruby"],
            NivelMySql: $scope.Knowledges["mysql"],
            NivelSqlServer: $scope.Knowledges["sqlserver"],
            NivelSalesforce: $scope.Knowledges["salesforce"],
            NivelPhotoshop: $scope.Knowledges["photoshop"],
            NivelIllustrator: $scope.Knowledges["illustrator"],
            NivelSeo: $scope.Knowledges["seo"],
            ConhecimentoLinguagens: $scope.ConhecimentoLinguagens


        };
        var valorAcao = $scope.Action;

        if (valorAcao == "Atualizar") {

            jobseeker.Id = $scope.jobseekerId;
            var jobseekerData = crudService.UpdateJobSeeker(jobseeker);
            jobseekerData.then(function (data) {
                getAllJobSeekers();
                $scope.divJobSeeker = false;
                if (data.status == 200) {
                    toastr["success"]("Candidato alterado com sucesso!", "CRUDEasy");
                }
            }, function () {
                toastr["error"]("Erro ao atualizar!", "CRUDEasy");
            });
        } else {

            var jobseekerData = crudService.InsertJobSeeker(jobseeker);
            jobseekerData.then(function (data) {
                getAllJobSeekers();

                if (data.status == 200) {
                    toastr["success"]("Candidato cadastrado com sucesso!", "CRUDEasy");
                }
                $scope.divJobSeeker = false;
            }, function () {
                toastr["error"]("Erro ao incluir!", "CRUDEasy");
            });
        }
    }

    //Insert additional function
    $scope.insertJobSeekerDiv = function () {

        limparCampos();
        $scope.Action = "Adicionar";
        $scope.divJobSeeker = true;
    }

    $scope.Cancelar = function () {
        $scope.divJobSeeker = false;
    };

    

    function limparCampos() {
            $scope.Id = "";
            $scope.Email = "";
            $scope.Name = "";
            $scope.Skype = "";
            $scope.Phone = "";
            $scope.Linkedin = "";
            $scope.City = "";
            $scope.State = "";
            $scope.Portifolio = "";
            $scope.HoursAvailable = "";
            $scope.ScheduleAvailable = "";
            $scope.WorkingTimeValue = "";
            $scope.Cpf = "";
            $scope.Bank = "";
            $scope.Agency = "";
            $scope.AccountType = "";
            $scope.AccountNumber = "";
            $scope.NivelIonic = "";
            $scope.NivelAndroid = "";
            $scope.NivelIos = "";
            $scope.NivelHtml = "";
            $scope.NivelCss = "";
            $scope.NivelBootstrap = "";
            $scope.NivelJquery = "";
            $scope.NivelAngularJs = "";
            $scope.NivelJava = "";
            $scope.NivelAspNetMvc = "";
            $scope.NivelC = "";
            $scope.NivelCPlus = "";
            $scope.NivelCake = "";
            $scope.NivelDjango = "";
            $scope.NivelMajento = "";
            $scope.NivelPhp = "";
            $scope.NivelWordpress = "";
            $scope.NivelPhyton = "";
            $scope.NivelRuby = "";
            $scope.NivelMySql = "";
            $scope.NivelSqlServer = "";
            $scope.NivelSalesforce = "";
            $scope.NivelPhotoshop = "";
            $scope.NivelIllustrator = "";
            $scope.NivelSeo = "";
            $scope.ConhecimentoLinguagens = "";

    }
    
});
