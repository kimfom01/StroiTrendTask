using Microsoft.AspNetCore.Mvc;
using StroiTrendTask.Api.Models;
using StroiTrendTask.Api.Services;

namespace StroiTrendTask.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TotalChatsController : ControllerBase
{
    private readonly ITotalChatsService _totalChatsService;

    public TotalChatsController(ITotalChatsService totalChatsService)
    {
        _totalChatsService = totalChatsService;
    }
    
    /// <summary>
    /// Gets the total chats data.
    /// </summary>
    /// <returns>A json response with total chats data.</returns>
    /// <remarks>
    /// Sample request:
    /// 
    ///     GET /api/totalchats
    ///     
    /// </remarks>
    /// <response code="200">Returns a json response with total chats data</response>
    /// <response code="404">If the resource could not be found</response>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<TotalChats>> GetTotalChats()
    {
        var totalChats = await _totalChatsService.GetData();

        if (totalChats is null)
        {
            return NotFound("Total chats could not be found");
        }

        return Ok(totalChats);
    }
}
