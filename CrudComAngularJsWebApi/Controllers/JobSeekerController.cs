using CrudEasy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CrudEasy.Controllers
{
    [RoutePrefix("api/v1/public")]
    public class JobSeekerController : ApiController
    {
        private readonly JobSeekerDbContext _db = new JobSeekerDbContext();

        #region CRUD - READ

        [HttpGet]
        [Route("jobseekers")]
        public IQueryable<JobSeeker> GetAllJobSeekers()
        {
            return _db.JobSeekers;
        }

        [HttpGet]
        [Route("jobseeker/{id:int}")]
        public HttpResponseMessage GetJobSeekerPerId (int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                JobSeeker jobSeeker = _db.JobSeekers.Find(id);

                return Request.CreateResponse(HttpStatusCode.OK, jobSeeker);
            }

            
        }

        #endregion

        #region CRUD - UPDATE

        [HttpPut]
        [Route("putjobseeker")]
        public HttpResponseMessage UpdateJobSeeker(JobSeeker jobSeeker)
        {
            if (jobSeeker == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                _db.Entry(jobSeeker).State = System.Data.Entity.EntityState.Modified;
                _db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }


        }

        #endregion


        #region CRUD - INSERT

        [HttpPost]
        [Route("postjobseeker")]
        public HttpResponseMessage InsertJobSeeker(JobSeeker jobSeeker)
        {
            if (jobSeeker == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                _db.JobSeekers.Add(jobSeeker);
                _db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }


        }


        #endregion

        #region CRUD - DELETE

        [HttpDelete]
        [Route("deljobseeker/{id:int}")]
        public HttpResponseMessage DeleteJobSeekerPerId(int id)
        {
            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {

                JobSeeker jobSeeker = _db.JobSeekers.Find(id);
                _db.JobSeekers.Remove(jobSeeker);
                _db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }


        }


        #endregion

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }

            base.Dispose(disposing);
            
        }

    }
}
