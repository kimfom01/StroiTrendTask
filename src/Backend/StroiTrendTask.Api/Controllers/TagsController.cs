using Microsoft.AspNetCore.Mvc;
using StroiTrendTask.Api.Models;
using StroiTrendTask.Api.Services;

namespace StroiTrendTask.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TagsController : ControllerBase
{
    private readonly ITagsService _tagsService;

    public TagsController(ITagsService tagsService)
    {
        _tagsService = tagsService;
    }

    /// <summary>
    /// Gets the tags data.
    /// </summary>
    /// <returns>A json response with tags data.</returns>
    /// <remarks>
    /// Sample request:
    /// 
    ///     GET /api/tags
    ///     
    /// </remarks>
    /// <response code="200">Returns a json response with tags data</response>
    /// <response code="404">If the resource could not be found</response>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Produces("application/json")]
    public async Task<ActionResult<Tags>> GetTags()
    {
        var tags = await _tagsService.GetData();

        if (tags is null)
        {
            return NotFound("Tags could not be found");
        }

        return Ok(tags);
    }
}