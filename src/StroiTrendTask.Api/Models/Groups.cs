using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Groups
{
    [JsonPropertyName("values")]
    public List<int> Values { get; set; }
}