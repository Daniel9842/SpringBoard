package edu.escuelaing.arsw.springBoard.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import edu.escuelaing.arsw.springBoard.cache.SavePoints;
/**
 * this class controls the spring project.
 * @author Daniel Santiago Ducuara Ardila
 *
 */
@RestController
public class BoardController {
	
	private SavePoints cache = SavePoints.getInstance();
	/**
	 * this class saves the new points in savepoints
	 * @param points new ones that users draw
	 * @return the points.
	 */
	@PostMapping("/points")
	public String processPoints(@RequestBody String points){
		int lenthg = points.length();
		String newPoints  = points.substring(0,2)+"new"+points.substring(2,lenthg);
		cache.addPositions(newPoints);
		return points;
	}
	/**
	 * this class returns the points stored in savepoints
	 * @return all new points drawn
	 */
	@PostMapping("/newPoints")
	public String getPositions(){
		System.out.println(cache.getPositions());
		return cache.getPositions();
	}
	
}