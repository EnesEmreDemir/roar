﻿using System.ComponentModel.DataAnnotations;

namespace Roar.Models
{
    public class RegisterModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string Date { get; set; }
    }
}
