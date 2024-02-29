using Microsoft.AspNetCore.Mvc;
using StroiTrendTask.Api.Models;
using StroiTrendTask.Api.Services;

namespace StroiTrendTask.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DurationController : ControllerBase
{
    private readonly IDurationService _durationService;

    public DurationController(IDurationService durationService)
    {
        _durationService = durationService;
    }

    /// <summary>
    /// Gets the duration data.
    /// </summary>
    /// <returns>A json response with duration data.</returns>
    /// <remarks>
    /// Sample request:
    /// 
    ///     GET /api/duration
    ///     
    /// </remarks>
    /// <response code="200">Returns a json response with duration data</response>
    /// <response code="404">If the resource could not be found</response>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Duration>> GetDuration()
    {
        var duration = await _durationService.GetData();

        if (duration is null)
        {
            return NotFound("Duration could not be found");
        }

        return Ok(duration);
    }
}