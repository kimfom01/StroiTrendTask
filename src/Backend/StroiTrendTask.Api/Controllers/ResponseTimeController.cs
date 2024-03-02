using Microsoft.AspNetCore.Mvc;
using StroiTrendTask.Api.Models;
using StroiTrendTask.Api.Services;

namespace StroiTrendTask.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResponseTimeController : ControllerBase
{
    private readonly IResponseTimeService _responseTimeService;

    public ResponseTimeController(IResponseTimeService responseTimeService)
    {
        _responseTimeService = responseTimeService;
    }
        
    /// <summary>
    /// Gets the response time data.
    /// </summary>
    /// <returns>A json response with response time data.</returns>
    /// <remarks>
    /// Sample request:
    /// 
    ///     GET /api/responsetime
    ///     
    /// </remarks>
    /// <response code="200">Returns a json response with response time data</response>
    /// <response code="404">If the resource could not be found</response>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ResponseTime>> GetResponseTime()
    {
        var responseTime = await _responseTimeService.GetData();

        if (responseTime is null)
        {
            return NotFound("Response time could not be found");
        }

        return Ok(responseTime);
    }
}
