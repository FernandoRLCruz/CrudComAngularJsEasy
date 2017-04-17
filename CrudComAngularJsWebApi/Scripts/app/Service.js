app.service("crudService", function($http) {


    //Get all registered job seekers
    this.GetAllJobSeekers = function () {
        return $http.get("/api/v1/public/jobseekers");
    }    
    

    //Get per id
    this.GetJobSeekerPerId = function (id) {

        return $http.get("/api/v1/public/jobseeker/" + id);
    }


    ////Update registered job seeker
    this.UpdateJobSeeker = function (jobseeker) {
        var response = $http({
            method: "put",
            url: "/api/v1/public/putjobseeker",
            data: JSON.stringify(jobseeker),
            dataType: "json"
    });

        return response;
    }

    ////Insert Job Seeker
    this.InsertJobSeeker = function (jobseeker) {
        var response = $http({
            method: "post",
            url: "/api/v1/public/postjobseeker",
            data: JSON.stringify(jobseeker),
            dataType: "json"
        });

        return response;
    }


    //Delete Job Seeker
    this.DeleteJobSeeker = function (id) {

        var response = $http({
            method: "delete",
            url: "/api/v1/public/deljobseeker/" + JSON.stringify(id)
           
        });

        return response;
    }



});