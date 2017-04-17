using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CrudEasy.Models
{
    public class JobSeeker
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Skype { get; set; }
        public string Phone { get; set; }
        public string Linkedin { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Portifolio { get; set; }
        public string HoursAvailable { get; set; }
        public string ScheduleAvailable { get; set; }
        public decimal WorkingTimeValue { get; set; }
        public string Cpf { get; set; }
        public string Bank { get; set; }
        public string Agency { get; set; }
        public string AccountType { get; set; }
        public string AccountNumber { get; set; }
        public int NivelIonic { get; set; }
        public int NivelAndroid { get; set; }
        public int NivelIos { get; set; }
        public int NivelHtml { get; set; }
        public int NivelCss { get; set; }
        public int NivelBootstrap { get; set; }
        public int NivelJquery { get; set; }
        public int NivelAngularJs { get; set; }
        public int NivelJava { get; set; }
        public int NivelAspNetMvc { get; set; }
        public int NivelC { get; set; }
        public int NivelCPlus { get; set; }
        public int NivelCake { get; set; }
        public int NivelDjango { get; set; }
        public int NivelMajento { get; set; }
        public int NivelPhp { get; set; }
        public int NivelWordpress { get; set; }
        public int NivelPhyton { get; set; }
        public int NivelRuby { get; set; }
        public int NivelMySql { get; set; }
        public int NivelSqlServer { get; set; }
        public int NivelSalesforce { get; set; }
        public int NivelPhotoshop { get; set; }
        public int NivelIllustrator { get; set; }
        public int NivelSeo { get; set; }
        public string ConhecimentoLinguagens { get; set; }






    }
}