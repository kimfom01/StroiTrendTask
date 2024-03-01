using Microsoft.AspNetCore.Mvc;
using StroiTrendTask.Api.Models;
using StroiTrendTask.Api.Services;

namespace StroiTrendTask.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RatingsController : ControllerBase
{
    private readonly IRatingService _ratingService;

    public RatingsController(IRatingService ratingService)
    {
        _ratingService = ratingService;
    }
    
    /// <summary>
    /// Gets the ratings data.
    /// </summary>
    /// <returns>A json response with ratings data.</returns>
    /// <remarks>
    /// Sample request:
    /// 
    ///     GET /api/ratings
    ///     
    /// </remarks>
    /// <response code="200">Returns a json response with ratings data</response>
    /// <response code="404">If the resource could not be found</response>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Ratings>> GetRatings()
    {
        var ratings = await _ratingService.GetData();

        if (ratings is null)
        {
            return NotFound("Ratings could not be found");
        }

        return Ok(ratings);
    }
}