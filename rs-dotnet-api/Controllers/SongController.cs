using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace rsapi.Controllers
{
    [ApiController]
    // [Route("[controller]")]
    public class SongController : ControllerBase
    {
        private Song mySong = new Song();
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<SongController> _logger;

        public SongController(ILogger<SongController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[controller]")]
        public String Get()
        {
            return "<h1>Hello World!</h1>";
        }

        [HttpGet]
        [Route("[controller]/Miracle")]
        public String GetSong()
        {
            return mySong.Miracle;
        }

        [HttpGet]
        [Route("[controller]/SongBM")]
        public String GetSongBM()
        {
            return mySong.SongBM();
        }

        [HttpGet]
        [Route("[controller]/FFA")]
        public String GetSongFFA()
        {
            return mySong.FFA();
        }

        [HttpGet]
        [Route("/testHealth")]
        public String GetHealth()
        {
            return "Here at DotNet API GetHealth!";
        }
    }
}