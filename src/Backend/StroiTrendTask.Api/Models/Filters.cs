using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Filters
{
    [JsonPropertyName("from")]
    public DateTime From { get; set; }

    [JsonPropertyName("to")]
    public DateTime To { get; set; }

    [JsonPropertyName("groups")]
    public Groups Groups { get; set; }
}